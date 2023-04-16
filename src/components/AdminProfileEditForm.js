import React, { useState } from "react";
import { TextField, Button, Grid, Container, Typography } from "@mui/material";
import { StyledEngineProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "react-auth-kit"
import Cookies from "js-cookie"
import Axios from "axios";
import url from "../url";
import "../css/FormStyle.css";

const AdminProfileEditForm = (fountainId) => {
  const auth = useAuthUser();

  const [username, setUsername] = useState(auth().name);
  const [email, setEmail] = useState(auth().email);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordsDontMatchError, setPasswordsDontMatchError] = useState(false);
  const [passwordsTooShortError, setPasswordsTooShortError] = useState(false);
  const [usernameTooShortError, setUsernameTooShortError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.length > 4) {
      setUsernameTooShortError(false);
      await Axios.post(url + "/AdminController/editProfileInfo", {
        oldEmail: auth().email,
        newEmail: email,
        username: username,
      }).then((res) => {
        if (res.status === 200) {
          Cookies.set("authorization_state", JSON.stringify({email: email, name: username, id: auth().id}));
          localStorage.setItem("email", email);
          localStorage.setItem("name", username);
          navigate("/admin");
        }
      });
    } else {
      setUsernameTooShortError(true);
    }
  };

  const handlePassSubmit = async (event) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      setPasswordsDontMatchError(true);
      setPasswordsTooShortError(false);
      return;
    }
    if (password.length < 5) {
      setPasswordsTooShortError(true);
      setPasswordsDontMatchError(false);
      return;
    }
    if (password && repeatPassword) {
      setPasswordsDontMatchError(false);
      setPasswordsTooShortError(false);
      await Axios.post(url + "/AdminController/changePassword", {
        email: auth().email,
        password: password,
      }).then((res) => {
          if (res.status === 200) {
            navigate("/admin");
          }
        });
    }
  };

  return (
    <StyledEngineProvider injectFirst>
      <Grid
        container
        spacing={-80}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "80vh" }}
      >
        <Container className="form-container" id="profileInfo">
          <Typography variant="h4" className="title" gutterBottom>
            Profile info
          </Typography>
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              id="username"
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
              className="input"
              required
            />
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
            {usernameTooShortError && (
              <Typography variant="subtitle2" sx={{ color: "red" }}>
                Username is too short!
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="success"
              className="button"
            >
              Save
            </Button>
          </form>
        </Container>

        <Container className="form-container">
          <Typography variant="h4" className="title" gutterBottom>
            Change password
          </Typography>
          <form className="form" onSubmit={handlePassSubmit}>
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
            <TextField
              id="repeatPassword"
              label="Repeat Password"
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              variant="outlined"
              className="input"
              required
            />
            {passwordsDontMatchError && (
              <Typography variant="subtitle2" sx={{ color: "red" }}>
                Passwords Do not match!
              </Typography>
            )}
            {passwordsTooShortError && (
              <Typography variant="subtitle2" sx={{ color: "red" }}>
                Password must be at least 5 characters long!
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="success"
              className="button"
            >
              Save
            </Button>
          </form>
        </Container>
      </Grid>
    </StyledEngineProvider>
  );
};
export default AdminProfileEditForm;
