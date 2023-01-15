import React, { useMemo, useState } from "react";
import Dropdown from "../../components/Dropdown";
import Text from "../../components/Typography/Typography";
import Table from "../../components/Table";
import LongMenu from "../../components/ActionMenu";
import truncateStr, { color } from "../../utils/function";
import {
  installationFSEData,
  installationFSEHeaders,
} from "../../mocks/table-data";
import Dot from "../../components/Dot";
import ModalExpanded from "../../components/Modals/ModalExpanded";
import ViewCustomer from "./components/ViewCustomer";
import ViewLocation from "./components/ViewLocation";

function UserAssignedInstallation() {
  const time = [];
  const name = [];
  const number = [];
  const dot = [];
  const [viewMore, setViewMore] = useState(true);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [enableDisableModalPopUp, setEnableDisableModalPopUp] = useState({
    enableViewCustomerModal: false,
  });

  const handleOpenModal = (item) => {
    setSelectedCustomer(item);
    setEnableDisableModalPopUp((prev) => ({
      ...prev,
      enableViewCustomerModal: true,
    }));
  };

  const handleCloseModal = (type) => {
    setSelectedCustomer(null);
    setEnableDisableModalPopUp((prev) => ({
      ...prev,
      enableViewCustomerModal: false,
    }));
  };

  const currentDate = Date.now();
  const today = new Date(currentDate);
  const [users] = useState(installationFSEData);
  const [installStatus] = useState([
    {
      value: "Failed",
      label: "Failed",
    },
    {
      value: "No LOS",
      label: "No LOS",
    },
    {
      value: "In Progress",
      label: "In Progress",
    },
    {
      value: "Completed",
      label: "Completed",
    },
  ]);

  users.forEach((item, index) => {
    time.push(
      <div key={index + 1} className="">
        <Text
          color="text-gray-500"
          variant="small"
          format="font-[400] text-[12px]"
        >
          {item.time}
        </Text>
      </div>
    );
    dot.push(
      <div key={index + 1} className="flex flex-col gap-7">
        <Dot height={8} width={8} className="" />
      </div>
    );
    name.push(
      <div key={index + 1} className=" flex flex-col gap-[3px] items-start">
        <Text
          color="text-gray-500"
          variant="small"
          format="font-[500] text-[12px]"
        >
          {item.name}
        </Text>
        <Text
          color="text-gray-500"
          variant="sub"
          format="font-[400] text-[10px]"
        >
          {item.address}
        </Text>
      </div>
    );
    number.push(
      <div key={index + 1} className="">
        <Text
          color="text-gray-500"
          variant="small"
          format="font-[400] text-[12px]"
        >
          {item.phone}
        </Text>
      </div>
    );
  });

  const rows = users.map((item, _) => {
    return {
      name: (
        <p
          className="font-normal text-sm text-black-300 underline cursor-pointer"
          onClick={() => handleOpenModal(item)}
        >
          {item.name}
        </p>
      ),
      email: <p className="font-normal text-sm text-black-300">{item.email}</p>,
      baseStation: (
        <p className="font-normal  text text-sm text-black-300">
          {item.baseStation}
        </p>
      ),
      address: (
        <p className="font-normal text-sm text-black-300">
          {truncateStr(item.address, 30)}
        </p>
      ),
      status: (
        <div className="flex items-center text-center">
          <Text format={`${color(item.status)}`} variant="sub">
            {item.status.toUpperCase()}
          </Text>
        </div>
      ),
      team: <p className="font-normal text-sm text-black-300">{item.team}</p>,
      action: (
        <LongMenu>
          <div className="flex flex-col px-3">
            {installStatus.map((item, index) => {
              return (
                <div
                  key={index + 1}
                  className="p-2 flex text-[15px] hover:bg-gray-200 cursor-pointer"
                >
                  {item.value}
                </div>
              );
            })}
          </div>
        </LongMenu>
      ),
    };
  });
  const columns = useMemo(() => installationFSEHeaders);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-[19px] ml-5">
        <div>
          <Text
            color="text-balck-300"
            variant="h3"
            format="font-[600] text-[20px]"
          >
            3 Installations
          </Text>
        </div>
        <div className="mr-5">
          <Dropdown
            title="Download"
            size="medium"
            className="p-4 mr-6"
            isDropdown={false}
            style={{ backgroundColor: "#666666" }}
          />
        </div>
      </div>

      <div className="">
        <Table
          columns={columns}
          data={rows}
          removePaginationAndFiltering={true}
          showChecked={false}
          filtering={true}
          className="w-full"
        />
      </div>
      <div className="flex gap-5 justify-between">
        <div className="mt-[30px] w-[40%] h-[24px] ml-5">
          <div className="flex items-center justify-between mb-[15px]">
            <div>
              <Text
                color="text-balck-300"
                variant="h4"
                format="font-[600] text-[20px]"
              >
                Itinerary
              </Text>
            </div>
            <div>
              {" "}
              <Text
                color="text-gray-500"
                variant="small"
                format="font-[400] text-[12px]"
              >
                {today.toLocaleDateString()}
              </Text>
            </div>
          </div>
          <hr className="my-4 mb-[20px] border-[#E0E0E0] border" />

          <div className="flex gap-[19px]">
            <div className="flex flex-col justify-between gap-[8px] items-center">
              {time}
            </div>
            <div className="flex flex-col justify-between gap-[0px] m-1  items-center">
              {dot}
            </div>
            <div className="flex flex-col justify-between gap-[8px]">
              {name}
            </div>
            <div className="flex flex-col justify-between gap-[8px] items-center">
              {number}
            </div>
          </div>
        </div>

        <div className="mt-[30px] w-[40%] h-[24px] mr-5">
          <Text
            color="text-black-300"
            variant="h3"
            format="font-[600] text-[16px] mb-4"
          >
            Status color
          </Text>
          <div className="flex flex-row gap-3">
            <div className="flex gap-2">
              <div className="flex gap-2 items-center">
                <Text
                  color="text-black-300"
                  variant="small"
                  format="font-[400] text-[10px]"
                >
                  Queued
                </Text>
                <Dot height={8} width={8} className="" color="#9BCFFF" />
              </div>
              <div className="flex gap-2 items-center">
                <Text
                  color="text-black-300"
                  variant="small"
                  format="font-[400] text-[10px]"
                >
                  In progresss
                </Text>
                <Dot height={8} width={8} className="" color="#FFD163" />
              </div>
              <div className="flex gap-2 items-center">
                <Text
                  color="text-black-300"
                  variant="small"
                  format="font-[400] text-[10px]"
                >
                  Completed
                </Text>
                <Dot height={8} width={8} className="" color="#35AF67" />
              </div>
              <div className="flex gap-2 items-center">
                <Text
                  color="text-black-300"
                  variant="small"
                  format="font-[400] text-[10px]"
                >
                  No LOS
                </Text>
                <Dot height={8} width={8} className="" color="#E0E0E0" />
              </div>
              <div className="flex gap-2 items-center">
                <Text
                  color="text-black-300"
                  variant="small"
                  format="font-[400] text-[10px]"
                >
                  Failed
                </Text>
                <Dot height={8} width={8} className="" color="#DE3E1B" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalExpanded
        open={enableDisableModalPopUp?.enableViewCustomerModal}
        width="100%"
        height="100vh"
      >
        <ViewCustomer
          handleCloseModal={handleCloseModal}
          info={selectedCustomer}
        />
      </ModalExpanded>
      <ModalExpanded open={viewMore} width="609px" height="370px">
        <ViewLocation handleCloseModal={() => setViewMore(false)} />
      </ModalExpanded>
    </div>
  );
}

export default UserAssignedInstallation;
