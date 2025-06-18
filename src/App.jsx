import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markers from "./markerData";

function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h1>Geo-tagged Resource Map</h1>
      <MapContainer
        center={[22.9734, 78.6569]}
        zoom={5}
        scrollWheelZoom={true}
        className="map-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        {markers.map((marker) => (
          <Marker key={marker.id} position={[marker.lat, marker.lng]}>
            <Popup>
              <strong>{marker.name}</strong>
              <br />
              {marker.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
