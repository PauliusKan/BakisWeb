import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
} from "@mui/material";
import { StyledEngineProvider } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Axios from "axios";
import url from "../url.js";
import "../css/FormStyle.css";

const EditFountainForm = () => {
  const location = useLocation()
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [isworking, setIsWorking] = useState(true);
  const [fountainId, setFountainId] = useState(location.state.id);

  useEffect(() => {
    Axios.get(url + `/FountainController/getFountain/${location.state.id}`).then((res) => {
      setName(res.data.name);
      setAddress(res.data.address);
      setLatitude(res.data.latitude);
      setLongitude(res.data.longitude);
      setIsWorking(res.data.isworking);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name && address && latitude && longitude && fountainId) {
      await Axios.post(url + "/FountainController/updateFountain", {
        name: name,
        address: address,
        latitude: latitude,
        longitude: longitude,
        fountainId: fountainId, 
        isworking: isworking,
      }).then((res) => {
        if(res.status === 200){
        navigate('/admin');
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
            Fountain info
          </Typography>
          <form className="form" onSubmit={handleSubmit}>
          <TextField
              id="fountainId"
              label="Fountain Id"
              type="text"
              value={fountainId}
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
