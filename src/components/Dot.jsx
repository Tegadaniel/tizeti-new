import React from "react";

export default function StepperIcon({ color, className, width, height }) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5" cy="5" r="5" fill={color || "#9BCFFF"} />
    </svg>
  );
}
