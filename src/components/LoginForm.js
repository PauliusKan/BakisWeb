import React, { useState } from "react";
import { TextField, Button, Grid, Container, Typography } from "@mui/material";
import { StyledEngineProvider } from "@mui/material";
import "../css/FormStyle.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email && password) {
      console.log(email, password);
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
              gutterBottom
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
