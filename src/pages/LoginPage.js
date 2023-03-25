import React from "react";
import LoginForm from "../components/LoginForm";
import BackButton from "../components/BackButton";
import "../css/BackgroundColor.css"

function LoginPage() {
  return (
    <>
      <BackButton to='/'/>
      <LoginForm/>
    </>
  );
}

export default LoginPage;
