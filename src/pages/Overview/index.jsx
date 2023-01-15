import React, { useState } from "react";
import SelectLabel from "../../components/Select";
import mail from "../../assets/images/mail.svg";
import profile from "../../assets/images/profile.svg";
import logout from "../../assets/images/logout.svg";
import { overview } from "./data";



function Overview() {
  const [currency, setCurrency] = useState("");
  const [data] = useState([
    { value: "NGN", label: "NGN" },
    { value: "GHC", label: "GHC" },
  ]);

  const [days, setdays] = useState("");
  const [daysData] = useState([{ value: "Last 7 days", label: "Last 7 days" }]);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleDaysChange = (event) => {
    setdays(event.target.value);
  };
  return (
    <div className="w-full">
      <div className="flex justify-end md:justify-between">
        <div className="flex items-center gap-5">
          <h3 className=" text-black-300 text-xl font-semibold">Overview</h3>
          <SelectLabel
            handleChange={handleCurrencyChange}
            value={currency}
            data={data}
            width={80}
            size="small"
          />
        </div>

        <div className="hidden md:flex cursor-pointer gap-14 items-center">
          <div className="flex gap-2">
            <img src={mail} alt={mail} />
            <p className=" text-black-300 font-medium text-lg">Mail Blast</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <img src={profile} alt={profile} />
              <p className=" text-black-300 font-medium text-lg">My Profile</p>
            </div>
            <div className="flex gap-2">
              <img src={logout} alt={logout} />
              <p className=" text-black-300 font-medium text-lg">Logout</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between gap-3">
            {overview.map((data, index) => {
              return (
                <div
                  key={index + 1}
                  className="flex justify-between p-7 gap-y-3 grow md:w-[250px] h-[137px] rounded-xl shadow-overview bg-white"
                >
                  <div className="flex flex-col gap-5">
                    <p className=" text-black-300 font-semibold text-xs">
                      {data.name}
                    </p>
                    <h4 className="text-black-300 font-semibold text-lg">
                      {data.value}
                    </h4>
                  </div>

                  <div className="">
                    <img
                      src={data.img}
                      height={65}
                      width={65}
                      alt={data.name}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className=" mt-7 mb-6">
        <SelectLabel
          handleChange={handleDaysChange}
          value={days}
          data={daysData}
          width={80}
          size="small"
        />
      </div>
      <div className="w-full h-[428px] divide-x divide-[#C4C4C4] grid md:grid-cols-12 border border-[#C4C4C4] mb-8">
        <div className="col-span-8">
        </div>

        <div className="col-span-4">
          <div className="flex flex-col pt-10 pl-7">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[#666666] font-normal">
                  Installations Today
                </p>
                <h4 className=" text-black-300 text-base font-bold">
                  52 in Total
                </h4>
              </div>
              <div>
                <p className="text-[#666666] font-normal">Total Subzones</p>
                <h4 className=" text-black-300 text-base font-bold">112</h4>
              </div>
              <div></div>
            </div>
            <hr className="my-8 h-px bg-[#C4C4C4] border-0" />

            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[#666666] font-normal">No LOS</p>
                <h4 className=" text-black-300 text-base font-bold">18</h4>
              </div>
              <div>
                <p className="text-[#666666] font-normal">Total Relocations</p>
                <h4 className=" text-black-300 text-base font-bold">14</h4>
              </div>
              <p className="text-primary text-sm underline font-medium">See all relocations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
