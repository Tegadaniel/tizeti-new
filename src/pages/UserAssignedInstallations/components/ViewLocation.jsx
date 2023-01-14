import React from "react";
import closeIcon from "../../../assets/images/closeIcon.svg";
import Button from "../../../components/Dropdown";
import SelectLabel from "../../../components/Select";
import Text from "../../../components/Typography/Typography";

function ViewLocation({ handleCloseModal }) {
  return (
    <div className="pt-[22px] pl-[25px] pr-[26px]">
      <div className="flex justify-between items-center mb-[22px]">
        <div>
          <Text
            color="text-black-300"
            variant="h2"
            format="font-[600] text-[20px]"
          >
            Choose a Starting Point
          </Text>
        </div>
        <img
          className="cursor-pointer mr-4"
          onClick={handleCloseModal}
          src={closeIcon}
          alt="close"
        />
      </div>
      <Text
        color="text-black-300"
        variant="body"
        format="font-[400] text-[16px] mb-[32px]"
      >
        Welcome! Please select the office branch from the list below to help you
        get started with your Itinerary.
      </Text>
      <SelectLabel
        size="medium"
        width="501px"
        defaultMessage="Select Starting point"
        className="mb-[36px]"
      />
      <div className="flex justify-end items-center">
        <div className="flex gap-3">
          <Button
            title="Cancel"
            size="medium"
            onClick={handleCloseModal}
            className="p-4 border border-[#666666]"
            isDropdown={false}
            style={{ backgroundColor: "#FFFFFF", color:'black' }}
          />

          <Button
            title="Route me"
            size="medium"
            className="p-4"
            isDropdown={false}
            style={{ backgroundColor: "#30BFAB" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewLocation;
