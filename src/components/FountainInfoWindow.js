import React from "react";
import { useState } from "react";
import { TextField, Button, Grid, Container, Typography } from "@mui/material";
import WaterDrop from "../resources/WaterDrop.png";
import WaterBottle from "../resources/WaterBottles.png";

const FountainInfoWindow = ({ fountain }) => {
  const [ph, setPh] = useState("10");
  const [tds, setTds] = useState("20");
  const [turbidity, setTurbidity] = useState("30");
  const [water, setWater] = useState("41");
  const [bottlesSaved, setBottlesSaved] = useState("50");
  const [plasticSaved, setPlasticSaved] = useState("20");

  const color = fountain.isworking === 1 ? "Green" : "Red";

  return (
    <Grid direction="row" alignItems="center" justifyContent="center">
      <Typography variant="h6" className="InfoWindowText">
        {fountain.name}
      </Typography>
      <Typography variant="subtitle2" className="InfoWindowText">
        {fountain.address}
      </Typography>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ padding: "10px" }}
      >
        <Grid sx={{ mr: "40px" }} alignItems="center" justifyContent="center">
          <Typography className="InfoWindowText">
            <img className="InfoWindowImg" src={WaterDrop} alt=""></img>
          </Typography>
          <Typography variant="subtitle2" className="InfoWindowText">
            pH: {ph}
          </Typography>
          <Typography variant="subtitle2" className="InfoWindowText">
            TDS: {tds} ppm
          </Typography>
          <Typography variant="subtitle2" className="InfoWindowText">
            Turbidity: {turbidity} NTU
          </Typography>
          <Typography variant="subtitle2" className="InfoWindowText">
            Water used: {water} L
          </Typography>
        </Grid>
        <Grid>
          <Typography className="InfoWindowText">
            <img className="InfoWindowImg" src={WaterBottle} alt=""></img>
          </Typography>
          <Typography variant="subtitle2" className="InfoWindowText">
            Water bottles saved:
          </Typography>
          <Typography variant="subtitle2" className="InfoWindowText">
            {bottlesSaved}
          </Typography>
          <Typography variant="subtitle2" className="InfoWindowText">
            Plastic saved:
          </Typography>
          <Typography variant="subtitle2" className="InfoWindowText">
            {plasticSaved} Kg
          </Typography>
        </Grid>
      </Grid>
      <Typography
        variant="h6"
        className="InfoWindowText"
        sx={{ color: { color } }}
      >
        {fountain.isworking === 1 ? "Online" : "Offline"}
      </Typography>
    </Grid>
  );
};

export default FountainInfoWindow;
