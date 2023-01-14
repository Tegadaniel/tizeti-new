import { forwardRef } from "react";
import Button from "./Button";
import Chip from "./Chip";

const Input = forwardRef(
  (
    {
      type,
      id,
      name,
      label,
      value,
      placeholder,
      data,
      onClick,
      onChange,
      onChipDelete,
    },
    ref
  ) => {
    const isClickable = onClick ? true : false;

    return (
      <div className="relative">
        <label
          htmlFor={id}
          className="inline-block font-medium mb-[15px] text-black-300"
        >
          {label}
        </label>
        {data?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-[15px]">
            {data?.map((value, index) => (
              <Chip
                key={index + 1}
                label={value}
                onDelete={() => onChipDelete(index)}
              />
            ))}
          </div>
        )}
        <input
          type={type}
          value={value}
          ref={ref}
          name={name}
          onChange={onChange}
          className={`w-full pl-5 py-2 text-black-300 bg-[#F9F9F9] rounded-[4px] z-0 border border-gray-400 focus:ring-primary focus:ring-1 focus:outline-none placeholder:text-gray-500 placeholder:font-light placeholder:text-sm`}
          placeholder={placeholder}
        />
      </div>
    );
  }
);

export default Input;
