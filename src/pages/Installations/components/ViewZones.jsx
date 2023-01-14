import { useCallback, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Text from "../../../components/Typography/Typography";
import closeIcon from "../../../assets/images/closeIcon.svg";
import Button from "../../../components/ui/Button";
import Chip from "../../../components/ui/Chip";
import CopyToClipboard from "../../../components/CopyToClipboard";
import ModalPopUpSmall from "../../../components/modals/ModalPopUpSmall";

import * as Api from "../api/zones";
import AddSubzone from "./AddSubzone";

function ViewZones({ handleCloseModal, zone }) {
  const [enableDisableModalPopUp, setEnableDisableModalPopUp] = useState({
    createSubzone: false,
  });
  const handleOpenModal = (type) => {
    setEnableDisableModalPopUp((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  const handleCloseInnerModal = (type) => {
    setEnableDisableModalPopUp((prev) => ({
      ...prev,
      [type]: false,
    }));
  };
  const queryClient = useQueryClient();

  const onCopy = useCallback(() => {
    setCopied(true);
  }, []);

  const { data } = useQuery({
    queryKey: ["subzones", zone.id],
    queryFn: () => Api.fetchSubZoneByZoneId(zone.id),
  });

  const mutation = useMutation({
    mutationFn: () => Api.deleteZone(zone.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["zones"] });
      handleCloseModal();
      toast.success("Zone has been successfully deleted", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
    },
  });

  const handleDelete = (index) => {
    console.log(index);
  };
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img
            className="cursor-pointer mr-4"
            onClick={handleCloseModal}
            src={closeIcon}
            alt="close"
          />
          <div className="flex flex-col gap-2">
            <Text variant="h4" color="text-[#333333]">
              {zone.name}
            </Text>
            <div className="flex items-center gap-[6px]">
              <span className=" font-light text-sm text-gray-500">
                Created{" "}
              </span>
              <div className="">
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#666666" />
                </svg>
              </div>
              <span className=" font-light text-sm text-gray-500">
                {zone.created_at}{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Button color="danger" size="small" onClick={mutation.mutate}>
            {mutation.isLoading ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </div>
      <hr className="my-4 border-[#E0E0E0]" />
      <div className="grid grid-cols-12 p-5">
        <div className="col-span-4 mt-3">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <Text variant="h4" format="font-[600]" color="text-[#333333]">
                Zone Details
              </Text>

              <hr className="my-4 border-[#E0E0E0]" />
              <div className="flex justify-between mb-6">
                <div className="flex flex-col gap-4 text-gray-500 text-sm">
                  <div>Date created</div>
                  <div>Number of Installs per day</div>
                  <div>Number of Subzones</div>
                </div>
                <div className="flex flex-col gap-4 font-normal text-sm text-black-300">
                  <div className="flex gap-2">
                    <p>{zone.created_at}</p>{" "}
                    <CopyToClipboard
                      onCopy={onCopy}
                      text="2222krefT31820322552873"
                    />
                  </div>
                  <div className="flex gap-2">
                    <p>{zone.no_of_installations} Installations</p>{" "}
                    <CopyToClipboard
                      onCopy={onCopy}
                      text="6.469215699999999 / 3.2950325"
                    />
                  </div>
                  <div>{zone.sub_zones.length} Subzones</div>
                </div>
              </div>
              <Text
                variant="body"
                color="text-[#30BFAB]"
                format="underline cursor-pointer mb-8"
              >
                Edit Zone
              </Text>
              <Text variant="h4" format="font-[600]" color="text-[#333333]">
                Subzone Information
              </Text>
              <hr className="my-4 border-[#E0E0E0]" />

              <div>
                <div className="flex items-start justify-between mb-6">
                  <span className="text-black text-sm">{zone.subzone}</span>
                  <CopyToClipboard
                    onCopy={onCopy}
                    text="6.469215699999999 / 3.2950325"
                  />
                </div>

                <div className="flex flex-wrap gap-[10px] gap-y-7 max-w-[95%] mb-7">
                  {data.map((subzone) => (
                    <Chip
                      key={subzone.id}
                      label={subzone.name}
                      onDelete={() => handleDelete(subzone.id)}
                    />
                  ))}
                </div>
              </div>
              <div onClick={() => handleOpenModal("createSubzone")}>
                <Text
                  variant="body"
                  color="text-[#30BFAB]"
                  format="underline cursor-pointer mb-8"
                >
                  Add Subzone
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalPopUpSmall open={enableDisableModalPopUp?.createSubzone}>
        <AddSubzone handleCloseModal={handleCloseInnerModal} />
      </ModalPopUpSmall>
    </div>
  );
}

export default ViewZones;
