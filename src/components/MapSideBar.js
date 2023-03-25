import "../css/MapSideBar.css";
import { Link, Typography } from "@mui/material";

function SideBar() {
  return (
    <div className="SideBar">
      <div className="ParameterContainer">
        <img
          className="SideBarImg"
          src="https://via.placeholder.com/200x200"
          alt=""
        ></img>
        <div className="TextContainer">
          <Typography variant="H4" className="SideBarText SensorLabel">Sunaudota vandens (L):</Typography>
          <Typography variant="H4" className="SideBarText">500</Typography>
        </div>
      </div>
      <div className="ParameterContainer">
        <img
          className="SideBarImg"
          src="https://via.placeholder.com/200x200"
          alt=""
        ></img>
        <div className="TextContainer">
          <Typography variant="H4" className="SideBarText">Sutaupyta 0.5l vandens buteliukų:</Typography>
          <Typography variant="H4" className="SideBarText">500</Typography>
        </div>
      </div>
      
      <Link href="/login" variant="H4" className="LoginButton">
        Admin login
      </Link>
    </div>
  );
}

export default SideBar;
