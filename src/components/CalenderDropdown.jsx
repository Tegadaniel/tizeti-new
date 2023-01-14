import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useDatePicker from "./Date";

export default function CalenderDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleApply = (data) => {
    console.log(data);
  };

  const { datePickerProps, setDatePickerProps, DatePicker } = useDatePicker();

  return (
    <div>
      <Button
        sx={{
          backgroundColor: "white",
          width: "100%",
          color: "black",
          textTransform: 'none',
          border: "1px solid #C4C4C4",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {props.children}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: 30,
          horizontal: 150,
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 0.5,
            borderRadius: 3,
            padding: 0,
          },
        }}
      >
        <DatePicker
          datePickerProps={datePickerProps}
          setDatePickerProps={setDatePickerProps}
          handleCancel={() => {
            handleClose();
          }}
          handleApply={(data) => {
            handleApply(data);
          }}
        />
      </Menu>
    </div>
  );
}
