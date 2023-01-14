import React, { useState } from "react";
import Text from "../../../components/Typography/Typography";
import Button from "../../../components/Dropdown";
import closeIcon from "../../../assets/images/closeIcon.svg";
import remove from "../../../assets/images/remove.svg";
import cloudUpload from "../../../assets/images/cloudUpload.svg";

function UploadKyc({ handleCloseModal }) {
  const [fileObj, setFileObj] = useState([]);
  const [fileArray, setFileArray] = useState([]);

  const uploadMultipleFiles = (e) => {
    // setFileObj((prevState) => [...prevState, e.target.files]);
    const updatedFileObj = [...fileObj, e.target.files];
    setFileObj(updatedFileObj);
    for (let i = 0; i < updatedFileObj.length; i++) {
      const newFileUrl = URL.createObjectURL(updatedFileObj[i][0]);
      setFileArray([...fileArray, newFileUrl]);
    }
  };

  const removeImage = (index) => {
    const filteredFiles = fileArray.filter((_, fileIndex) => fileIndex !== index);
    setFileArray(filteredFiles);
  };

  return (
    <>
      <div className="flex items-start">
        <img
          className="cursor-pointer mr-4"
          onClick={() => handleCloseModal("enableKycModal")}
          src={closeIcon}
          alt="close"
        />
      </div>
      <div className="flex flex-col gap-4  items-center justify-center p-[16px] ">
        <Text
          variant="h3"
          color="text-balck-300"
          format="font-[600] text-[18px]"
        >
          Upload KYC
        </Text>
        <Text
          variant="small"
          color="text-balck-300"
          format="font-[400] text-[14px]"
        >
          Upload document you want to share with your team.
        </Text>
      </div>

      <div className="border-2 border-dotted border-[#30BFAB] bg-[#30BFAB26] h-[186px] w-full p-[32px] flex items-center justify-center">
        <div className="flex flex-col gap-[20px] items-center justify-center">
          <img
            className=""
            width="50"
            height="50"
            src={cloudUpload}
            alt="upload"
          />
          <label
            className="flex items-center justify-center cursor-pointer bg-[#30BFAB] text-[#FFFFFF] text-sm border rounded-md h-[40px] w-[126.07px]"
            htmlFor="dropzoneFile"
          >
            Browse File
          </label>

          <input
            accept="image/*"
            onChange={uploadMultipleFiles}
            type="file"
            multiple
            id="dropzoneFile"
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="flex pt-[44px] flex-col gap-[33px]">
        <Text
          variant="small"
          color="text-gray-500"
          format="font-[400] text-[14px]"
        >
          Uploaded files
        </Text>
        <div className="flex flex-col gap-3">
          {fileArray.map((url, index) => (
            <div className="flex justify-between items-center" key={index + 1}>
              <div>
                <img
                  className=""
                  width="50"
                  height="50"
                  src={url}
                  alt="..."
                />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => removeImage(index)}
              >
                <img
                  className=""
                  width="20"
                  height="20"
                  src={remove}
                  alt="..."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UploadKyc;
