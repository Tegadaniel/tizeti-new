import React, { useState } from "react";
import Table from "../../components/Table";
import Input from "../../components/ui/Input";
import Text from "../../components/Typography/Typography";
import { refundHeaders, refundData } from "../../mocks/table-data";
import { color } from "../../utils/function";
import Dropdown from "../../components/Dropdown";



function Refunds() {
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(1);
  const handlePaginationChange = (e, page) => {
    setPaginationNumber(page);
  };
  const rows = refundData.map((item, _) => {
    return {
      name: <p className="font-normal text-sm text-black-300">{item.name}</p>,
      email: <p className="font-normal text-sm text-black-300">{item.email}</p>,
      phone: (
        <p className="font-normal  text text-sm text-black-300">{item.phone}</p>
      ),
      note: <p className="font-normal text-sm text-black-300">{item.note}</p>,
      status: (
        <div className="flex items-center text-center">
          <Text format={`${color(item.status)}`} variant="sub">
            {item.status.toUpperCase()}
          </Text>
        </div>
      ),
    };
  });
  const columns = refundHeaders;
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h4>{refundData.length}  Refunds</h4>
          </div>
          <div className="flex items-center gap-[14px]">
            <div className="w-full">
              <Input type="text" placeholder="Search" />
            </div>

            <Dropdown
              title="Download"
              size="small"
              className="p-2"
              isDropdown={false}
              style={{ backgroundColor: "#666666" }}
            />
          </div>
        </div>

        <Table
          columns={columns}
          data={rows}
          showChecked={false}
          filtering={true}
          className="w-full"
          page={paginationNumber}
          handlePaginationChange={handlePaginationChange}
          totalNumberOfPages={totalNumberOfPages}
        />
      </div>
    </>
  );
}

export default Refunds;
