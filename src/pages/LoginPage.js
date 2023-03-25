import React from "react";
import LoginForm from "../components/LoginForm";
import BackButton from "../components/BackButton";

function LoginPage() {
  return (
    <>
      <BackButton to='/'/>
      <LoginForm/>
    </>
  );
}

export default LoginPage;
