// import ReactDOM from "react-dom";

// export interface ModalProps {
//   onBackdropClick: () => void;
//   children: any;
// }

// const Modal: React.FC<ModalProps> = ({ onBackdropClick, children }) => {
//   return ReactDOM.createPortal(
//     <div onClick={onBackdropClick}>
//       <span>This is your pop up modal</span>
//     </div>,
//     document.getElementById("modal-root")!
//   );
// };

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SignUpForm from "./SignUpForm";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalMUI() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} color="secondary">
        Sign up here
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sign up for more access!
          </Typography>
          <SignUpForm open={false} />
        </Box>
      </Modal>
    </div>
  );
}

// export default ModalMUI;
