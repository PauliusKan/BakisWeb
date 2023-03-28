import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";
import { StyledEngineProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../css/FormStyle.css";

const AddFountainForm = (fountainIds) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [description, setDescription] = useState("");
  const [fountainId, setFountainId] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/admin");
  };

  const handleChange = (event) => {
    setFountainId(event.target.value);
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
            Add new fountain
          </Typography>
          <form className="form" onSubmit={handleSubmit}>
            <FormControl>
              <InputLabel id="fountainIdLabel">Fountain Id</InputLabel>
              <Select
                id="fountainId"
                label="Fountain Id"
                value={fountainId}
                onChange={handleChange}
                variant="outlined"
                sx={{ mb: "20px" }}
                required
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
              </Select>
            </FormControl>
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
export default AddFountainForm;
