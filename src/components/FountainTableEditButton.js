import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "../css/EditButtonNoUnderlineStyle.css";

const FountainTableEditButton = ({ fountainId }) => {
  return (
    <Link to={{ pathname: "/editFountain" }} state={{ id: fountainId }}>
      <Button
        variant="outlined"
        sx={{ marginRight: "10px", textDecoration: "none" }}
        color="success"
      >
        Edit
      </Button>
    </Link>
  );
};

export default FountainTableEditButton;
