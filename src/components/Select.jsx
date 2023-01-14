import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabel({
  value,
  data,
  handleChange,
  size,
  width,
  defaultMessage,
  className,
}) {
  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };

  return (
    <div className={className}>
      <FormControl sx={{ m: 1, minWidth: width }} size={size}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>{defaultMessage || "Please Select"}</em>
          </MenuItem>
          {data?.map((item, key) => {
            return (
              <MenuItem key={key} value={item.value}>
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
