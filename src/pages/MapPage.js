import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import SideBar from "../components/MapSideBar";
import "../css/MapPage.css";

const markers = [
  { id: 1, lat: 48.8584, lng: 2.2945 },
  { id: 2, lat: 48, lng: 2 },
];

function MapPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [center, setCenter] = useState({ lat: 48.8584, lng: 2.2945 });

  useEffect(() => {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat, lng };
        setCenter(pos);
      }
    );
  }, []);

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
          {markers.map((marker) => {
            return (
              <MarkerF
                key={marker.id}
                position={{ lat: marker.lat, lng: marker.lng }}
              ></MarkerF>
            );
          })}
        </GoogleMap>
      </div>
    </div>
  );
}

export default MapPage;
