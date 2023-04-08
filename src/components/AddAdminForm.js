import React, { useState } from "react";
import { TextField, Button, Grid, Container, Typography } from "@mui/material";
import { StyledEngineProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import url from "../url";
import "../css/FormStyle.css";

const AddAdminForm = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email) {
      await Axios.post(url + "/RegisterNewAdminController/newAdmin", {
        email: email,
      }).catch((error) => {
        if(error.response.status === 403){
          setErrorMsg(true);
        }
      }).then((res) => {
        if(res.status === 200){
          setErrorMsg(false);
          navigate("/admin");
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

            {errorMsg && (
              <Typography variant="subtitle2" sx={{ color: "red" }}>
                Admin already exists or email is wrong!
              </Typography>
            )}

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
