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

const EditFountainForm = (fountainId) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [description, setDescription] = useState("");
  const [editedFountainId, setFountainId] = useState("");

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
            Fountain info
          </Typography>
          <form className="form" onSubmit={handleSubmit}>
          <TextField
              id="fountainId"
              label="Fountain Id"
              type="text"
              value={editedFountainId}
              onChange={(e) => setFountainId(e.target.value)}
              variant="outlined"
              className="input"
              disabled
              required
            />
            <TextField
              id="name"
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              className="input"
              required
            />
            <TextField
              id="address"
              label="Address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              variant="outlined"
              className="input"
              required
            />
            <TextField
              id="description"
              label="Description"
              type="text"
              multiline
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              variant="outlined"
              className="input"
            />

            <Typography variant="h6" sx={{ ml: "5px" }}>
              Coordinates
            </Typography>
            <TextField
              id="latitude"
              label="Latitude"
              type="number"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              variant="outlined"
              className="input"
              required
            />
            <TextField
              id="longitude"
              label="Longitude"
              type="number"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
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
export default EditFountainForm;
