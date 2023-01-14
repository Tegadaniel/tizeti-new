import React from "react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import closeIcon from "../../../assets/images/closeIcon.svg";

function AddSubzone({ handleCloseModal }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-black-300 text-lg">New SubZone</h1>
        <img
          className="cursor-pointer mr-4"
          onClick={() => handleCloseModal("createSubzone")}
          src={closeIcon}
          alt="close"
        />
      </div>

      <hr className="mt-[14px] mb-8" />
      <div className="mb-8">
        <Input
          id="name"
          name="name"
          type="text"
          label="Zone name"
          placeholder="Enter zone name"
        />
      </div>
      <hr className="mb-[23px] mt-8" />
      <Button className="mb-10" fullWidth>
        Create Zone
      </Button>
    </>
  );
}

export default AddSubzone;
