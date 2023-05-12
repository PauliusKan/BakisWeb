import "../css/MapSideBar.css";
import { Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit"
import url from "../url.js";
import Axios from "axios";
import SideBarLogo from "../resources/SidebarLogo.png";
import WaterDrop from "../resources/WaterDrop.png";
import WaterBottle from "../resources/WaterBottles.png";
import PlasticBin from "../resources/PlasticBin.png";

function SideBar() {
  const auth = useAuthHeader();

  const [totalWater, setTotalWater] = useState(0);
  const [totalBottles, setTotalBottles] = useState(0);
  const [totalPlastic, setTotalPlastic] = useState(0);

  var button;
  if (auth() === "") {
    button = (
      <Link href="/login" variant="H4" className="LoginButton">
        Admin login
      </Link>
    );
  } else {
    button = (
      <Link href="/admin" variant="H4" className="LoginButton">
        Admin dashboard
      </Link>
    );
  }

  useEffect(() => {
    Axios.get(url + "/FountainController/getFountains").then((res) => {
      var fountains = res.data.filter(
        (fountain) => fountain.latitude != null || fountain.longitude != null
      );
      var water = 0;
      var bottles = 0;
      var plastic = 0;
      fountains.forEach((element) => {
        water += element.amount;
      });
      setTotalWater(water.toFixed(1));
      fountains.forEach((element) => {
        bottles += element.bottlesSaved;
      });
      setTotalBottles(bottles);
      fountains.forEach((element) => {
        plastic += element.plasticSaved;
      });
      setTotalPlastic(plastic.toFixed(3));
    });
  }, []);

  return (
    <div className="SideBar">
      <div className="sidebar-header">
        <img src={SideBarLogo} alt="Logo" className="sidebar-logo" />
        <h1 className="sidebar-title">Fountains</h1>
      </div>
      <div className="ParameterContainer">
        <img className="SideBarImg" src={WaterDrop} alt=""></img>
        <div className="TextContainer">
          <Typography variant="H4" className="SideBarText" id="valueLabel">
            Total water used:
          </Typography>
          <Typography variant="h5" className="SideBarText">
            {totalWater} L
          </Typography>
        </div>
      </div>
      <div className="ParameterContainer">
        <img className="SideBarImg" src={WaterBottle} alt=""></img>
        <div className="TextContainer">
          <Typography variant="H4" className="SideBarText" id="valueLabel">
            Total 0.5l water bottles saved:
          </Typography>
          <Typography variant="h5" className="SideBarText">
            {totalBottles}
          </Typography>
        </div>
      </div>

      <div className="ParameterContainer">
        <img className="SideBarImg" src={PlasticBin} alt=""></img>
        <div className="TextContainer">
          <Typography variant="H4" className="SideBarText" id="valueLabel">
            Total plastic saved:
          </Typography>
          <Typography variant="h5" className="SideBarText">
            {totalPlastic} Kg
          </Typography>
        </div>
      </div>

      {button}
    </div>
  );
}

export default SideBar;
