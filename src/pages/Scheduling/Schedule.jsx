import { useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Modal from "../../components/modals/ModalPopUpSmall";
import ModalExpanded from "../../components/modals/modalExpanded";
import ScheduleCard from "./components/ScheduleCard";
import forward from "../../assets/icons/forward.svg";
import previous from "../../assets/icons/previous.svg";
import closeIcon from "../../assets/images/closeIcon.svg";

const COLORS = [
  {
    borderColor: "border-[#0680F1]",
    backgroundColor: "bg-[#9BCFFFCC]",
    slateColor: "bg-[#1F91FBCC]",
  },
  {
    borderColor: "border-[#FFE5A7]",
    backgroundColor: "bg-[#FEF8E8]",
    slateColor: "bg-[#FFE5A7]",
  },
  {
    borderColor: "border-[#DEF7F8]",
    backgroundColor: "bg-[#8EDFDF]",
    slateColor: "bg-[#8EDFE1]",
  },
  {
    borderColor: "border-[#E7BAFF]",
    backgroundColor: "bg-[#F7E8FD]",
    slateColor: "bg-[#E7BAFF]",
  },
  {
    borderColor: "border-[#DEDEDE]",
    backgroundColor: "bg-[#F7F7F7]",
    slateColor: "bg-[#DEDEDE]",
  },
];

const Schedule = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const handleSuccessModalClose = () => setIsSuccessful(false);

  const handleSuccessModalOpen = () => {
    setIsSuccessful(true);
    handleClose();
  };

  return (
    <>
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">Date</span>
        <div className="flex items-center justify-between max-w-[32%]">
          <span className="block font-medium leading-[19px] text-black-300">
            September 27, 2022
          </span>
          <div className="flex gap-6">
            <img src={previous} alt="Previous date" />
            <img src={forward} alt="Next date" />
          </div>
          <div>
            <Button>All Team</Button>
          </div>
        </div>
      </div>
      <hr className="mt-[27px] mb-[77px]" />
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          {COLORS.map((color, index) => (
            <div className="flex gap-5" key={index}>
              <div className="flex flex-col gap-[30px] text-gray-500 text-xs">
                <span>10 am</span>
                <span>1 pm</span>
                <span>4 pm</span>
              </div>

              <div className="border-l pl-[10px] pr-[15px] grow mb-10">
                <ScheduleCard color={color} />
              </div>
              {/* <hr className="border-gray-400 mb-[18px] mb-11 last-of-type:hidden" /> */}
            </div>
          ))}
        </div>
        <div className="col-span-4">
          <div className="border-[0.8px] border-[#E0E0E0] rounded-[3px] px-[22px] py-[14px]">
            <div className="flex flex-col text-sm mb-10">
              <span className="text-gray-500">Total Teams</span>
              <strong className="font-bold text-black-300">8</strong>
            </div>
            <div className="flex flex-col text-sm mb-8">
              <span className="text-gray-500">Installations Today</span>
              <strong className="font-bold text-black-300">52</strong>
            </div>
            <hr className="mb-[17px]" />
            <div className="flex flex-col text-sm mb-10">
              <span className="text-gray-500">Zones</span>
              <strong className="font-bold text-black-300">27</strong>
            </div>
            <div className="flex flex-col text-sm">
              <span className="text-gray-500">Sub-zones</span>
              <strong className="font-bold text-black-300">112</strong>
            </div>
          </div>
          <div className="text-sm mt-[22px]">
            <span
              className="font-medium text-primary cursor-pointer"
              onClick={handleOpen}
            >
              Schedule Installation
            </span>
            <p className="font-light text-gray-500 mt-[17px]">
              Manually schedule an installation.
            </p>
          </div>
        </div>
      </div>
      <Modal open={isOpen} handleClose={handleClose} style={{ width: "80%" }}>
        <div className="max-h-[80vh] overflow-scroll">
          <div className="flex items-center gap-4">
            <img
              className="w-4 h-4 cursor-pointer"
              onClick={handleClose}
              src={closeIcon}
              alt="Close modal"
            />
            <div>
              <span className="font-medium text-lg text-black-300">
                Manual Schedule
              </span>
              <p className="text-sm text-gray-500 mb-4">
                Manually schedule Installations for customers acquired via
                others means
              </p>
            </div>
          </div>

          <hr className="mb-[30px]" />
          <div className="flex flex-col gap-[30px] px-[12px]">
            <Input label="First Name" />
            <Input label="Last Name" />
            <Input label="Email Address" />
            <Input label="Phone Number" />
            <Input label="User adress" />
            <Input label="Payment reference" />
            <Input label="Longtitude and Latitude" />
            <Input label="Asset zone" />
            <Input label="Subzone" />
            <Input label="Schedule Customer" type="date" />
            <Button onClick={handleSuccessModalOpen} fullWidth>
              Validate
            </Button>
          </div>
        </div>
      </Modal>
      <ModalExpanded open={isSuccessful} handleClose={handleSuccessModalClose}>
        <div className="flex flex-col items-center justify-center h-[536px]">
          <div className="mb-[44px]">
            <svg
              width="107"
              height="107"
              viewBox="0 0 107 107"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="53.5"
                cy="53.5"
                r="53.5"
                fill="#18C814"
                fill-opacity="0.25"
              />
              <circle cx="53.5" cy="53.5" r="41.6111" fill="#18C814" />
              <path
                d="M46.2479 66.2212L32.9324 52.9057L35.4885 50.3496L46.2479 61.109L69.0746 38.2823L71.6307 40.8385L46.2479 66.2212Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-semibold text-2xl text-black-300 mb-4">
              Schedule Successful!
            </span>
            <p className="font-medium text-sm text-gray-500 mb-7">
              You have succesfuly schedule an installation for the customer.
              Please return to Installation table for details
            </p>
            <div>
              {" "}
              <Button onClick={handleSuccessModalClose}>Continue</Button>
            </div>
            <p className="font-medium text-[10px] text-[#999999] mt-14">
              A copy of this information and data has been sent to the customer
              email.
            </p>
          </div>
        </div>
      </ModalExpanded>
    </>
  );
};

export default Schedule;
