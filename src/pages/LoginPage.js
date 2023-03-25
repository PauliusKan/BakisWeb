import React from "react";
import LoginForm from "../components/LoginForm";
import BackButton from "../components/BackButton";
import { Box } from "@mui/material";
import "../css/BackgroundColor.css"

function LoginPage() {
  return (
    <Box>
      <BackButton to='/'/>
      <LoginForm/>
    </Box>
  );
}

export default LoginPage;
