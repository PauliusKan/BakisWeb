import React from "react";
import { Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from "axios";
import url from "../url.js";
import "../css/EditButtonNoUnderlineStyle.css";

const FountainTableDeleteButton = ({ fountain, onDelete }) => {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    Axios.post(url + "/FountainController/deleteFountain", {
        fountainId: fountain.id, 
      }).then(() => onDelete(fountain.id));
  };

  return (
    <>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete confirmation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this fountain?
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Id: {fountain.id}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Name: {fountain.name}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Address: {fountain.address}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Latitude: {fountain.latitude}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
          Longitude: {fountain.longitude}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FountainTableDeleteButton;
