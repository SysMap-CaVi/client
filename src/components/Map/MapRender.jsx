import {
  MapContainer,
  TileLayer,
  Icon,
  Popup,
  Marker,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import stores from "../../mocks/mocks";
import marker from "../../assets/icons/marker.ico";
import store from "../../assets/icons/store.ico";

import "./Style.css";

import "leaflet/dist/leaflet.css";

import { useState } from "react";

import RoutingMachine from "../Route/RoutingMachine";
import MyLocationButton from "../MyLocationButton/MyLocationButton";

function MapRender() {
  const [center, setCenter] = useState({ lat: -15.7801, lng: -47.9292 });

  const customIcon = new L.Icon({
    iconUrl: store,
    iconSize: [40, 40],
  });

  const createCustomClusterIcon = (cluster) => {
    return new L.divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: L.point(30, 30, true),
    });
  };

  return (
    <div className="map-container">
      <MapContainer center={center} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RoutingMachine/>
        {stores.map((store, index) => (
          <Marker
            key={index}
            position={[store.locale.lat, store.locale.lon]}
            icon={customIcon}
            
          >
            <Popup >
              <h2>{store.name}</h2>
              <span>{store.phone}</span>
            </Popup>
          </Marker>
        ))}
        <MyLocationButton />
      </MapContainer>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: marker,
  iconSize: [38, 38],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default MapRender;
