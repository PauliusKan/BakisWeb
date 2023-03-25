import React, { useState } from "react";
import { TextField, Button, Grid, Container, Typography } from "@mui/material";
import { StyledEngineProvider } from "@mui/material";
import "../css/FormStyle.css";

const AddAdminForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email) {
      console.log(email);
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
            Add new admin
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
            <Button
              type="submit"
              variant="contained"
              color="success"
              className="button"
            >
              Send admin invite
            </Button>
          </form>
        </Container>
      </Grid>
    </StyledEngineProvider>
  );
};
export default AddAdminForm;
