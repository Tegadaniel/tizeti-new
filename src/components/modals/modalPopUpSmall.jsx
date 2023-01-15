import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  backDrop: {
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  },
}));

export default function ModalPopUpSmall({ open, handleClose, children }) {
  const inlineStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    padding: "25px, 5px",
    borderRadius: "10px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  const classes = useStyles();
  return (
    <div>
      <Modal
        keepMounted={false}
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        BackdropProps={{
          classes: {
            root: classes.backDrop,
          },
        }}
        maxwidth="xs"
      >
        <Box sx={inlineStyle}>{children}</Box>
      </Modal>
    </div>
  );
}
