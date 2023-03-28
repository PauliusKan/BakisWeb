import React from "react";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import BackButton from "../components/BackButton";
import { Box } from "@mui/material";
import "../css/BackgroundColor.css"

function ForgotPasswordPage() {
  return (
    <Box>
      <BackButton to='/login'/>
      <ForgotPasswordForm/>
    </Box>
  );
}

export default ForgotPasswordPage;
