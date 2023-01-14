import { useState, useRef, Suspense } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import * as Api from "./api/zones";
import Button from "../../components/ui/Button";
import Table from "../../components/Table";
import SearchInput from "../../components/ui/SearchInput";
import Input from "../../components/ui/Input";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../../components/modals/modalPopUpSmall";
import ModalExpanded from "../../components/modals/modalExpanded";
import ViewZones from "./components/ViewZones";
import { toast } from 'react-toastify';
import { zonesHeaders } from "../../constants/zones";
import { arrayToCommaSeparatedString } from "../../utils/helper";
import truncateStr from "../../utils/function";
import { TizetiGIFLogoTable } from "../../utils/helpers/TizetiGIFLogoTable";

const InstallationZones = () => {
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [totalNumberOfPages] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const [selectedZone, setSelectedZone] = useState(null);
  // const [subzones, setSubzones] = useState([]);
  // const subzoneRef = useRef(null);
  const [formData, setFormData] = useState();

  const { data: zones } = useQuery({
    queryKey: ["zones"],
    queryFn: Api.fetchZones,
  });

  const createZone = useMutation({
    mutationFn: () => Api.createZone(formData),
    onSuccess: () => {
      setIsOpen(false);
      setFormData("");
      toast.success("Zone has been successfully created", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
    },
  });

  const manipulatedData = zones.map((zone) => {
    return {
      ...zone,
      no_of_installations: zone.no_of_installations ?? 0,
      sub_zones: truncateStr(arrayToCommaSeparatedString(zone.sub_zones), 70),
    };
  });

  const handleFormDataChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // const handleSubmit = () => {
  //   console.log(formData);
  //   setIsOpen(false);
  //   setFormData('')
  // };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleViewMore = (zoneInfo) => {
    setSelectedZone(zoneInfo);
    setViewMore(true);
  };
  const handlePaginationChange = (e, page) => {
    setPaginationNumber(page);
  };
  // const handleClick = () => {
  //   const newSubzone = subzoneRef.current.value;
  //   setSubzones((prevState) => [...prevState, newSubzone]);
  // };

  // const handleDelete = (index) => {
  //   const filteredState = subzones.filter(
  //     (_, subzoneId) => subzoneId !== index
  //   );
  //   setSubzones(filteredState);
  // };

  return (
    <>
      <div className="flex items-center justify-between px-4">
        <div>
          <span className="font-bold text-base text-black-300">
            {zones.length} Installation Zones
          </span>
        </div>
        <div className="flex items-center gap-[14px]">
          <div className="w-[104px]">
            <SearchInput type="text" placeholder="Search" />
          </div>
          <div>
            <Button
              onClick={handleOpen}
              className="max-h-8 text-[14px]"
              endIcon={<AddIcon fontSize="small" />}
            >
              Add Zone
            </Button>
          </div>
          <div>
            <Button className="max-h-8 text-[14px]" color="neutral">
              Download
            </Button>
          </div>
        </div>
      </div>
      <Modal open={isOpen} handleClose={handleClose}>
        <h1 className="font-semibold text-black-300 text-lg">New Zone</h1>
        <hr className="mt-[14px] mb-8" />
        <div className="mb-8">
          <Input
            id="name"
            name="name"
            type="text"
            label="Zone name"
            placeholder="Enter zone name"
            onChange={handleFormDataChange}
          />
        </div>
        {/* <div>
          <Input
            ref={subzoneRef}
            type="text"
            name="subzone"
            label="Subzone(s)"
            placeholder="Enter sub zone(s)"
            onClick={handleClick}
            onChipDelete={handleDelete}
            data={subzones}
          />
        </div> */}
        <hr className="mb-[23px] mt-8" />
        <Button className="mb-10" fullWidth onClick={createZone.mutate}>
          Create Zone
        </Button>
      </Modal>
      <Table
        columns={zonesHeaders}
        data={manipulatedData}
        showChecked={false}
        filtering={true}
        className="w-full"
        page={paginationNumber}
        handlePaginationChange={handlePaginationChange}
        totalNumberOfPages={totalNumberOfPages}
        onClick={handleViewMore}
      />
      <ModalExpanded open={viewMore} width="100%" height="100vh">
        <Suspense fallback={<TizetiGIFLogoTable></TizetiGIFLogoTable>}>
          <ViewZones
            handleCloseModal={() => setViewMore(false)}
            zone={selectedZone}
          />
        </Suspense>
      </ModalExpanded>
    </>
  );
};

export default InstallationZones;
