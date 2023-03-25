import React from "react";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { StyledEngineProvider } from "@mui/material";
import { Link } from "react-router-dom";
import "../css/BackButton.css";

const BackButton = ({ to }) => {
  return (
    <StyledEngineProvider injectFirst>
      <Link to={to}>
        <Button variant="contained" color="success" className="BackButton">
          <ArrowBackIosNewIcon />
          Back
        </Button>
      </Link>
    </StyledEngineProvider>
  );
};

export default BackButton;
