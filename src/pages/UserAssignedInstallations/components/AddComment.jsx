import React from "react";
import Text from "../../../components/Typography/Typography";
import Button from "../../../components/Dropdown";

function AddComment({ handleCloseModal }) {
  return (
    <>
      <div className="flex items-center justify-center pt-[16px] pb-[16px]">
        <Text
          variant="h3"
          color="text-balck-300"
          format="font-[600] text-[18px]"
        >
          Installation Comments
        </Text>
      </div>
      <hr className="my-4 border-[#E0E0E0]" />
      <div className="pt-[25px] pl-[29px] pr-[30px]">
        <div className="flex flex-col gap-2">
          <Text
            variant="h4"
            color="text-balck-300"
            format="font-[500] text-[16px] mb-[20px]"
          >
            Comment
          </Text>

          <textarea
            name="comments"
            id="comments"
            className="resize-none rounded-md bg-[#F9F9F9] border border-[#C4C4C4] p-4"
            cols="30"
            rows="5"
          ></textarea>
        </div>
      </div>
      <hr className="my-4 border-[#E0E0E0]" /> 
      <div className="flex flex-col gap-[12px]  pl-[29px] pr-[30px]">
        <div>
          <Button
            title="Submit"
            size="medium"
            className="p-4 m-3"
            isDropdown={false}
            style={{ backgroundColor: "#30BFAB" }}
          />
        </div>
        <div onClick={() => handleCloseModal("enableCommentModal")}>
          {" "}
          <Button
            title="Cancel"
            size="medium"
            className="p-4 m-3 border border-[#666666]"
            isDropdown={false}
            style={{ backgroundColor: "#FFFFFF", color: "black" }}
          />
        </div>
      </div>
    </>
  );
}

export default AddComment;
