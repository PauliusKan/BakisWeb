import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import "./App.css";

const markers = [
  { id: 1, lat: 48.8584, lng: 2.2945 },
  { id: 2, lat: 48, lng: 2 },
];

function App() {
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
      <div className="SideBar">
        <img
          className="SideBarImg"
          src="https://st2.depositphotos.com/7458252/12211/i/950/depositphotos_122113036-stock-photo-road-sign-used-in-slovakia.jpg"
          alt=""
        ></img>
        <p className="SideBarText">Hello izza texts</p>
        <img
          className="SideBarImg"
          src="https://st2.depositphotos.com/7458252/12211/i/950/depositphotos_122113036-stock-photo-road-sign-used-in-slovakia.jpg"
          alt=""
        ></img>
        <p className="SideBarText">Hello izza texts</p>
        <img
          className="SideBarImg"
          src="https://st2.depositphotos.com/7458252/12211/i/950/depositphotos_122113036-stock-photo-road-sign-used-in-slovakia.jpg"
          alt=""
        ></img>
        <p className="SideBarText">Hello izza texts</p>
      </div>
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

export default App;
