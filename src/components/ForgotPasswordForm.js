import React, { useState } from "react";
import { TextField, Button, Grid, Container, Typography } from "@mui/material";
import { StyledEngineProvider } from "@mui/material";
import Axios from "axios";
import url from "../url";
import "../css/FormStyle.css";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email) {
      await Axios.post(url + "/ForgotPasswordController/resetPassword", {
        email: email,
      }).then((res) => {
        if(res.status === 200){
          setSuccessMsg(true);
        }
      });
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
            Reset password
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
            {successMsg && (
              <Typography variant="subtitle2" sx={{ color: "green" }}>
                The password was reset for this email!
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              color="success"
              className="button"
            >
              Send new password
            </Button>
          </form>
        </Container>
      </Grid>
    </StyledEngineProvider>
  );
};
export default ForgotPasswordForm;
