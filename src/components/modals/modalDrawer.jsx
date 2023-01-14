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

const style = {
  width: 400,
  overflow: "scroll",
  height: "100vh",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function ModalDrawer({ open, handleClose, children }) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        keepMounted={false}
        open={open}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
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
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
