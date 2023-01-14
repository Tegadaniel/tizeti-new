import * as React from "react";
import Menu from "@mui/material/Menu";
import { List, ListItem, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { ButtonComponent } from "./ButtonStyle";

const Button = (props) => {
  const {
    className,
    disabled = false,
    title,
    type,
    size = "medium", // small medium or large
    onClick,
    style,
    isLoading,
    backgroundColor,
    textColor,
    isDropdown = false,
    formElement
  } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <ButtonComponent
        size={size}
        style={style}
        onClick={isDropdown ? handleClick : onClick}
        disabled={disabled || isLoading}
        isLoading={isLoading}
        textColor={textColor}
        backgroundColor={backgroundColor}
        className={className}
        type={type}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <>{title}</>
        )}

        {isDropdown && (
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            className="ml-2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.99999 3.78145L8.29999 0.481445L9.24266 1.42411L4.99999 5.66678L0.757324 1.42411L1.69999 0.481445L4.99999 3.78145Z"
              fill="white"
            />
          </svg>
        )}
      </ButtonComponent>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1,
          },
        }}
      >
        <div className="flex justify-between">
          <h3 className="ml-4 mt-2 font-bold">Filter</h3>
          <IconButton onClick={handleClose}>
            <Close fontSize="small" />
          </IconButton>
        </div>
        <List>
          <ListItem className="mb-2 p-3">{formElement}</ListItem>
        </List>
      </Menu>
    </>
  );
};

export default Button;
