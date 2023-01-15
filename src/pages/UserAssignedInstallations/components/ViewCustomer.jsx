import React, { useState } from "react";
import Text from "../../../components/Typography/Typography";
import closeIcon from "../../../assets/images/closeIcon.svg";
import circularGray from "../../../assets/images/circularGray.svg";
import circularGreen from "../../../assets/images/circularGreen.svg";
import copy from "../../../assets/images/copy.svg";
import Empty from "../../../assets/images/Empty.svg";
import Dropdown from "../../../components/Dropdown";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import ModalPopUpSmall from "../../../components/Modals/ModalPopUpSmall";
import AddComment from "./AddComment";
import UploadKyc from "./UploadKyc";
import InitiateRefund from "./InitiateRefund";

function ViewCustomer({ handleCloseModal, info }) {
  console.log(info);
  const [enableDisableModalPopUp, setEnableDisableModalPopUp] = useState({
    enableCommentModal: false,
    enableKycModal: false,
    enableRefund: false
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
  const [isImage] = useState(false);
  const [iscomment] = useState(false);
  const [images] = React.useState(
    new Array(4).fill({
      name: "Image23244.png",
      date: "Aug 23, 2022 5:33 PM",
      image: circularGreen,
    })
  );
  const [copied, setCopied] = React.useState(false);
  const onCopy = React.useCallback(() => {
    setCopied(true);
    toast.success("Copied", {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
    });
  }, []);
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
              {info.name}
            </Text>
            <div className="flex gap-4">
              <Text variant="body" color="text-[#666666]">
                Sign up from {info.email}
              </Text>
              <div className="p-2">
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
              <Text variant="body" color="text-[#666666]">
                Aug 23, 2022
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div
            className={`${info.status === "failed" ? "hidden" : ""}`}
            onClick={() => handleOpenModal("enableKycModal")}
          >
            <Dropdown
              title="Upload KYC"
              size="small"
              className="p-4 m-3"
              isDropdown={false}
              style={{ backgroundColor: "#828282" }}
            />
          </div>
          <div
             className={`${info.status === "failed" ? "" : "hidden"}`}
            onClick={() => handleOpenModal("enableRefund")}
          >
            <Dropdown
              title="Initiate Refund"
              size="small"
              className="p-4 m-3"
              isDropdown={false}
              style={{ backgroundColor: "#828282" }}
            />
          </div>
        </div>
      </div>
      <hr className="my-4 border-[#E0E0E0]" />

      <div className="grid grid-cols-12 p-5">
        <div className="col-span-5 mt-3">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <Text variant="h4" format="font-[600]" color="text-[#333333]">
                Installation Information
              </Text>

              <hr className="my-4 border-[#E0E0E0]" />
              <div className="flex justify-between mb-6">
                <div className="flex flex-col gap-4 text-gray-500 text-sm">
                  <div>Payment refrence</div>
                  <div>Longtitude and Latitude</div>
                  <div>Installation status</div>
                  <div>Asset Zone</div>
                  <div>Subzone</div>
                  <div>Nearest Base Station</div>
                  <div>User address</div>
                  <div>Installed address</div>
                  <div>Distance to BTS</div>
                </div>
                <div className="flex flex-col gap-4 font-normal text-sm text-black-300">
                  <div className="flex gap-2">
                    <p>2222krefT31820322552873</p>{" "}
                    <CopyToClipboard
                      onCopy={onCopy}
                      text="2222krefT31820322552873"
                    >
                      <img src={copy} alt="copy" className="cursor-pointer" />
                    </CopyToClipboard>
                  </div>
                  <div className="flex gap-2">
                    <p>6.469215699999999 / 3.2950325</p>{" "}
                    <CopyToClipboard
                      onCopy={onCopy}
                      text="6.469215699999999 / 3.2950325"
                    >
                      <img src={copy} alt="copy" className="cursor-pointer" />
                    </CopyToClipboard>
                  </div>
                  <div>Completed</div>
                  <div>Yaba</div>
                  <div>Festac</div>
                  <div>FESTAC</div>
                  <div>20b Qclose festac town lagos</div>
                  <div>20b Qclose festac town lagos</div>
                  <div>1.35KM (Xovar)</div>
                </div>
              </div>

              <Text
                variant="body"
                color="text-[#30BFAB]"
                format="underline cursor-pointer mb-8"
              >
                Edit Installation
              </Text>

              <Text variant="h4" format="font-[600]" color="text-[#333333]">
                Customer Information
              </Text>

              <hr className="my-4 border-[#E0E0E0]" />

              <div className="flex justify-between mb-6">
                <div className="flex flex-col gap-4 text-gray-500 text-sm">
                  <div>First name</div>
                  <div>Last name</div>
                  <div>Email address</div>
                  <div>Phone</div>
                  <div>Physical address</div>
                </div>
                <div className="flex flex-col gap-4 font-normal text-sm text-black-300">
                  <div>{info.name}</div>
                  <div>{info.name}</div>
                  <div>{info.email}</div>
                  <div>08066112875</div>
                  <div>{info.address}</div>
                </div>
              </div>

              <Text
                variant="body"
                color="text-[#30BFAB]"
                format="underline cursor-pointer mb-8"
              >
                Update user
              </Text>

              <Text variant="h4" format="font-[600]" color="text-[#333333]">
                Installation Comments
              </Text>

              <hr className="my-4 border-[#E0E0E0]" />

              {iscomment ? (
                <div>
                  <textarea
                    name="comments"
                    id="comments"
                    readOnly={true}
                    className="resize-none rounded-md bg-[#F2F2F2] p-4"
                    cols="30"
                    rows="5"
                    value="Installation completed successfully without challenges 00:00:5e:00:53:AF"
                  ></textarea>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-center">
                    <div className="flex flex-col gap-3  mb-[40px]">
                      <img src={Empty} className="" alt="Empty State" />

                      <Text
                        variant="small"
                        color="text-gray-500"
                        format="font-[400] text-[12px]"
                      >
                        No Installation comments found
                      </Text>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => handleOpenModal("enableCommentModal")}
                  >
                    <Text
                      variant="small"
                      color="text-primary"
                      format="font-[500] text-[14px] underline"
                    >
                      Add Comment
                    </Text>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="col-span-2"></div>

        <div className="col-span-5">
          <div className="w-full h-[300px] mb-[104px] border border-[#E0E0E0] pt-[23px] pl-[32px] pr-[32px]">
            <Text
              variant="h4"
              color="text-[#333333]"
              format="font-[600] mb-[15px]"
            >
              Transaction timeline
            </Text>
            <div className="flex gap-10 mb-[43px]">
              <div className="flex flex-col gap-2">
                <Text variant="body" color="text-[#35AF67]" format="font-[600]">
                  Paystack
                </Text>
                <Text variant="sub" color="text-[#666666]" format="font-[400]">
                  Selected Payment plan
                </Text>
              </div>
              <div className="flex flex-col gap-2">
                <Text variant="body" color="text-[#35AF67]" format="font-[600]">
                  {" "}
                  NGN59,500.00
                </Text>
                <Text variant="sub" color="text-[#666666]" format="font-[400]">
                  Amount paid
                </Text>
              </div>
            </div>
            <hr className="my-4 border-[#E0E0E0]" />

            <div className="flex flex-col gap-8">
              <div className="flex gap-2">
                <img src={circularGray} alt="circular gray" />

                <div className="flex flex-col gap-1">
                  <Text
                    variant="body"
                    format="font-[400]"
                    color="text-[#666666]"
                  >
                    Payment refrence
                  </Text>
                  <Text
                    variant="sub"
                    format="font-[500]"
                    color="text-[#333333]"
                  >
                    2222krefT31820322552873
                  </Text>
                </div>
              </div>

              <div className="flex gap-2">
                <img src={circularGreen} alt="circular gray" />

                <div className="flex flex-col gap-1">
                  <Text
                    variant="body"
                    format="font-[400]"
                    color="text-[#666666]"
                  >
                    Payment stamp
                  </Text>
                  <Text
                    variant="sub"
                    format="font-[500]"
                    color="text-[#333333]"
                  >
                    Aug 23, 2022 5:33 PM
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-auto border border-[#E0E0E0] pt-[23px] pl-[45px] pr-[37px]">
            <Text
              variant="h4"
              color="text-[#333333]"
              format="font-[600] mb-[10px]"
            >
              KYC Uploads
            </Text>
            {isImage ? (
              <div className="flex justify-between gap-4 mb-[24px]">
                <div className="flex flex-col gap-4">
                  {images.map((item, index) => {
                    return (
                      <div className="flex gap-2" key={index + 1}>
                        <img
                          src={item.image}
                          alt="circular gray"
                          height="30"
                          width="30"
                        />
                        <div className="flex flex-col gap-1">
                          <Text
                            variant="body"
                            format="font-[400]"
                            color="text-[#666666]"
                          >
                            {item.name}
                          </Text>

                          <Text
                            variant="sub"
                            format="font-[500]"
                            color="text-[#333333]"
                          >
                            {item.date}
                          </Text>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-[32px]">
                    <Text
                      variant="body"
                      format="font-[500] underline"
                      color="text-[#30BFAB]"
                    >
                      View
                    </Text>
                    <Text
                      variant="body"
                      format="font-[500]"
                      color="text-[#DE3E1B]"
                    >
                      Delete
                    </Text>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <div className="flex flex-col gap-3  mb-[40px]">
                  <img src={Empty} className="" alt="Empty State" />

                  <Text
                    variant="small"
                    color="text-gray-500"
                    format="font-[400] text-[12px]"
                  >
                    Nothing here. Upload KYC doc
                  </Text>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ModalPopUpSmall open={enableDisableModalPopUp?.enableCommentModal}>
        <AddComment handleCloseModal={handleCloseInnerModal} />
      </ModalPopUpSmall>
      <ModalPopUpSmall open={enableDisableModalPopUp?.enableKycModal}>
        <UploadKyc handleCloseModal={handleCloseInnerModal} />
      </ModalPopUpSmall>

      <ModalPopUpSmall open={enableDisableModalPopUp?.enableRefund}>
        <InitiateRefund handleCloseModal={handleCloseInnerModal} />
      </ModalPopUpSmall>

      
    </div>
  );
}

export default ViewCustomer;
