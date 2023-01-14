/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from "react";
import loader from "../../assets/icons/TizetiLoaderColored.gif";

export const TizetiGIFLogoTable = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={loader} alt="Loading..." />
    </div>
  );
};
