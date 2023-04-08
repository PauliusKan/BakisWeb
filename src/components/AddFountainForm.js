import React, { useState, useEffect } from "react";
import Axios from "axios";
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
import url from "../url.js";
import "../css/FormStyle.css";

const AddFountainForm = (fountainIds) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [fountainId, setFountainId] = useState("");
  const [fountainIdList, setFountainIdList] = useState([]);
  const [noFountainsMsg, setNoFountainsMsg] = useState(false);

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
        isworking: true,
      }).then((res) => {
        if(res.status === 200){
        navigate('/admin');
        }
      });
    }
  };

  const handleChange = (event) => {
    setFountainId(event.target.value);
  };

  useEffect(() => {
    Axios.get(url + "/FountainController/getNewFountains").then((res) => {
      console.log(res.data);
      console.log(res.data.length);
      if (res.data.length === 0) {
        setNoFountainsMsg(true);
        return;
      }
      setFountainIdList(res.data);
    });
  }, []);

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

          {noFountainsMsg && (
            <Typography variant="subtitle2" className="title">
              No new fountains have been found.
            </Typography>
          )}

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
                {fountainIdList.map((fountainId) => (
                  <MenuItem key={fountainId.id} value={fountainId.id}>
                    {fountainId.id}
                  </MenuItem>
                ))}
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
