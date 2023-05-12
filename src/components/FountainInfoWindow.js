import React from "react";
import { Grid, Typography } from "@mui/material";
import WaterDrop from "../resources/WaterDrop.png";
import WaterBottle from "../resources/WaterBottles.png";

const FountainInfoWindow = ({ fountain }) => {
  const statusColor = fountain.isworking === 1 ? "green" : "red";
  const tdsColor =
    fountain.tds === null
      ? "black"
      : fountain.tds < 300
      ? "green"
      : fountain.tds >= 300 && fountain.tds < 500
      ? "gold"
      : fountain.tds >= 500 && fountain.tds < 800
      ? "orange"
      : "red";
  const phColor =
    fountain.ph === null
      ? "black"
      : fountain.ph < 7.5 && fountain.ph > 6.5
      ? "green"
      : "red";
  const turbidityColor =
    fountain.turbidity === null
      ? "black"
      : fountain.turbidity < 400
      ? "green"
      : fountain.turbidity >= 400 && fountain.turbidity < 1000
      ? "orange"
      : "red";

  return (
    <Grid direction="column" container alignItems="center" justifyContent="center">
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
          <Typography
            variant="subtitle2"
            className="InfoWindowText"
            color={phColor}
          >
            pH: {fountain.ph ?? "-"}
          </Typography>
          <Typography
            variant="subtitle2"
            className="InfoWindowText"
            color={tdsColor}
          >
            TDS: {fountain.tds ?? "-"} ppm
          </Typography>
          <Typography
            variant="subtitle2"
            className="InfoWindowText"
            color={turbidityColor}
          >
            Turbidity: {fountain.turbidity ?? "-"} NTU
          </Typography>
          <Typography variant="subtitle2" className="InfoWindowText">
            Water used: {fountain.amount?.toFixed(2) ?? "0"} L
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
            {fountain.bottlesSaved}
          </Typography>
          <Typography variant="subtitle2" className="InfoWindowText">
            Plastic saved:
          </Typography>
          <Typography variant="subtitle2" className="InfoWindowText">
            {fountain.plasticSaved?.toFixed(3)} Kg
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h6" className="InfoWindowText" color={statusColor}>
        {fountain.isworking === 1 ? "Online" : "Offline"}
      </Typography>
    </Grid>
  );
};

export default FountainInfoWindow;
