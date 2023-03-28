import React, { useState } from "react";
import Axios from "axios";
import { TextField, Button, Grid, Container, Typography } from "@mui/material";
import { StyledEngineProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import url from "../url.js";
import "../css/FormStyle.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setauthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await Axios.post(url + "/AdminController/login", {
        email: email,
        password: password,
      }).then((res) => {
        if (res.data.auth) {
          setauthenticated(false);
          localStorage.setItem("errorMsg", true);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.result.name);
          localStorage.setItem("email", res.data.result.email);
          localStorage.setItem("Id", res.data.result.Id);
          navigate("/admin");
        } else {
          localStorage.clear();
          setauthenticated(true);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledEngineProvider injectFirst>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh" }}
      >
        <Container className="form-container">
          <Typography variant="h4" className="title" gutterBottom>
            Admin Login
          </Typography>
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              className="input"
              required
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              className="input"
              required
            />
            {errorMsg &&
            <Typography variant="subtitle2" sx={{ color: "red" }}>
              Username or password is incorrect
            </Typography>
            }
            <Typography
              variant="subtitle2"
              component="a"
              href="/forgotPassword"
            >
              Forgot password?
            </Typography>
            <Button
              type="submit"
              variant="contained"
              color="success"
              className="button"
            >
              Login
            </Button>
          </form>
        </Container>
      </Grid>
    </StyledEngineProvider>
  );
};
export default LoginForm;
