import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import SideBar from "../components/MapSideBar";
import "../css/MapPage.css";
import Marker from "../resources/fountainMarker4.png"
import url from "../url.js";
import Axios from "axios";

/*const markers = [
  { id: 1, lat: 54.904011, lng: 23.958356 },
  { id: 2, lat: 54.915509, lng: 23.971891 },
  { id: 3, lat: 54.896643, lng: 23.921028 },
];*/

function MapPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [fountains, setFountains] = useState([]);
  const [center, setCenter] = useState({ lat: 48.8584, lng: 2.2945 });

  useEffect(() => {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat, lng };
        setCenter(pos);
      }
    );

    Axios.get(url + "/FountainController/getFountains").then((res) => {
      setFountains(
        res.data.filter(
          (fountain) => fountain.latitude != null || fountain.longitude != null
        )
      );
    });
  }, []);

  const handleMarkerClick = () =>{
    console.log("ASDASDA")
  }

  if (!isLoaded) {
    return <div>Map isn't loaded</div>;
  }

  return (
    <div className="MainPage">
      <SideBar/>
      <div className="Map">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControlOptions: {
              position: 3,
            },
            styles: [
              {
                elementType: "labels",
                featureType: "transit",
                stylers: [{ visibility: "off" }],
              },
              {
                elementType: "labels",
                featureType: "poi",
                stylers: [{ visibility: "off" }],
              },
            ],
          }}
        >
          {fountains.map((fountain) => {
            return (
              <MarkerF
                key={fountain.id}
                position={{ lat: fountain.latitude, lng: fountain.longitude }}
                icon={Marker}
                onClick={handleMarkerClick}
              ></MarkerF>
            );
          })}
        </GoogleMap>
      </div>
    </div>
  );
}

export default MapPage;
