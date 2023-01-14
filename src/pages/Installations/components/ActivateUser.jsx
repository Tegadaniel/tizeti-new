import React from "react";
import closeIcon from "../../../assets/images/closeIcon.svg";
import Text from "../../../components/Typography/Typography";
import Grid from "@mui/material/Grid";
import { Form, Formik, Field } from "formik";

function ActivateUser({ handleCloseModal, info }) {
  console.log(info);
  return (
    <>
      <div className="flex justify-between items-center pl-[28px] pr-[28px] pt-[17px]">
        <Text
          variant="h3"
          color="text-[#333333]"
          format="font-semibold text-lg"
        >
          Validate MAC ID
        </Text>
        <img
          className="cursor-pointer mr-4"
          onClick={() => handleCloseModal("enableActivateModal")}
          src={closeIcon}
          alt="close"
        />
      </div>
      <hr className="my-4 border-[#E0E0E0]" />
      <div className="pt-[21px] pl-[29px]">
        <Text
          variant="h4"
          color="text-[#333333]"
          format="font-normal text-base"
        >
          Confirm MAC ID for {info.user.firstName + " " + info.user.lastName} ?
        </Text>
        <div className="pt-[23px] flex flex-col">
          <Text
            variant="body"
            color="text-[#666666]"
            format="fornt-normal text-sm"
          >
            Radio MAC type:
          </Text>
          <div className="flex flex-row gap-3 mt-[15px]">
            <input type="radio" value="LTE" name="MacType" /> LTE
            <input type="radio" value="Non-LTE" name="MacType" /> Non-LTE
          </div>

          <div className="mt-[32.33px]">
            <Text
              variant="h3"
              color="text-[#333333]"
              format="fornt-normal text-base"
            >
              Radio MAC ID
            </Text>
            <input
              type="text"
              className="w-[90%] h-10 p-2 mt-[15px] rounded border-solid border "
            />
          </div>
        </div>
      </div>
      <hr className="my-4 border-[#E0E0E0]" />
      <button className="w-full bg-[#30BFAB] text-[#FFFFFF] h-[45px] rounded-sm">
        Validate
      </button>
    </>
  );
}

export default ActivateUser;
