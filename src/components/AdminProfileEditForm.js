import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
} from "@mui/material";
import { StyledEngineProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../css/FormStyle.css";

const AdminProfileEditForm = (fountainId) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/admin");
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

            <br/>
            <br/>
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
