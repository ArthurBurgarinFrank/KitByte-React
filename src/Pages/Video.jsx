import Footer from "../Components/footer";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import module from "../dependencies";

export default function Video() {

  const navigate = module.useNavigate();

  const handlePage = () => {
    navigate("/courses")
  }
  return (
    <Dialog
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      open={true}
    >
      <DialogTitle id="alert-dialog-title">
        {"Nenhum video disponível para esse curso"}
      </DialogTitle>

      <DialogActions>
        <module.Button onClick={handlePage} autoFocus>
          Ok
        </module.Button>
      </DialogActions>
    </Dialog>
  );
}
