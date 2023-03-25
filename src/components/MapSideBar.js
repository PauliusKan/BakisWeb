import "../css/MapSideBar.css";
import { Link, Typography } from "@mui/material";
import SideBarLogo from "../resources/SidebarLogo.png"
import WaterDrop from "../resources/WaterDrop.png"
import WaterBottle from "../resources/WaterBottle.png"

function SideBar() {
  return (
    <div className="SideBar">
      <div class="sidebar-header">
        <img
          src={SideBarLogo}
          alt="Logo"
          class="sidebar-logo"
        />
        <h1 class="sidebar-title">Fountains</h1>
      </div>
      <div className="ParameterContainer">
        <img
          className="SideBarImg"
          src={WaterDrop}
          alt=""
        ></img>
        <div className="TextContainer">
          <Typography variant="H4" className="SideBarText" id="valueLabel">
            Sunaudota vandens (L):
          </Typography>
          <Typography variant="h4" className="SideBarText">
            500
          </Typography>
        </div>
      </div>
      <div className="ParameterContainer">
        <img
          className="SideBarImg"
          src={WaterBottle}
          alt=""
        ></img>
        <div className="TextContainer">
          <Typography variant="H4" className="SideBarText" id="valueLabel">
            Sutaupyta 0.5l vandens buteliukų:
          </Typography>
          <Typography variant="h4" className="SideBarText">
            500
          </Typography>
        </div>
      </div>

      <Link href="/login" variant="H4" className="LoginButton">
        Admin login
      </Link>
    </div>
  );
}

export default SideBar;
