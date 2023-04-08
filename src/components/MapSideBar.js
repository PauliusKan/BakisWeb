import "../css/MapSideBar.css";
import { Link, Typography } from "@mui/material";
import SideBarLogo from "../resources/SidebarLogo.png";
import WaterDrop from "../resources/WaterDrop.png";
import WaterBottle from "../resources/WaterBottles.png";
import PlasticBin from "../resources/PlasticBin.png";

function SideBar() {
  var button;
  if (localStorage.getItem("token") == null) {
    button = <Link href="/login" variant="H4" className="LoginButton">
      Admin login
    </Link>;
  } else {
    button = <Link href="/admin" variant="H4" className="LoginButton">
      Admin dashboard
    </Link>;
  }

  return (
    <div className="SideBar">
      <div className="sidebar-header">
        <img src={SideBarLogo} alt="Logo" className="sidebar-logo" />
        <h1 class="sidebar-title">Fountains</h1>
      </div>
      <div className="ParameterContainer">
        <img className="SideBarImg" src={WaterDrop} alt=""></img>
        <div className="TextContainer">
          <Typography variant="H4" className="SideBarText" id="valueLabel">
            Sunaudota vandens (L):
          </Typography>
          <Typography variant="h5" className="SideBarText">
            500
          </Typography>
        </div>
      </div>
      <div className="ParameterContainer">
        <img className="SideBarImg" src={WaterBottle} alt=""></img>
        <div className="TextContainer">
          <Typography variant="H4" className="SideBarText" id="valueLabel">
            Sutaupyta 0.5l vandens buteliukų:
          </Typography>
          <Typography variant="h5" className="SideBarText">
            500
          </Typography>
        </div>
      </div>

      <div className="ParameterContainer">
        <img className="SideBarImg" src={PlasticBin} alt=""></img>
        <div className="TextContainer">
          <Typography variant="H4" className="SideBarText" id="valueLabel">
            Sutaupyta plastiko kg:
          </Typography>
          <Typography variant="h5" className="SideBarText">
            500
          </Typography>
        </div>
      </div>

      {button}
    </div>
  );
}

export default SideBar;
