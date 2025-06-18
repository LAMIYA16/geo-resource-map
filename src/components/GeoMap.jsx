import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;


const locations = [
    {
        id: 1,
        name: "Rehab Center Delhi",
        type: "Rehabilitation",
        lat: 28.6139,
        lng: 77.2090
    },
    {
        id: 2,
        name: "Legal Aid Mumbai",
        type: "Legal",
        lat: 19.0760,
        lng: 72.8777
    },
];

const GeoMap = () => {
    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map((loc) => (
                    <Marker key={loc.id} position={[loc.lat, loc.lng]}>
                        <Popup>
                            <strong>{loc.name}</strong><br />
                            Type: {loc.type}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default GeoMap;
