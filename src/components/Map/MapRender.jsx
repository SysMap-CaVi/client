import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import { stores } from "../../mocks/mocks";
import catarinaPino from "../../assets/icons/catarina-pino.png";
import yellowPino from "../../assets/icons/yellow-pino.svg";
import whiteArrow from "../../assets/icons/white-arrow.svg";
import "./Style.css";

import "leaflet/dist/leaflet.css";

import { useState } from "react";

import LeafletGeocoder from "../GeoCoder/LeafletGeocoder";
import MyLocation from "components/MyLocation/MyLocation";

function MapRender({userLocation}) {
  // PONTO CENTRAL DO MAPA QUANDO ACESSAR O SITE
  const [center, setCenter] = useState({
    lat: -16.7369911,
    lng: -49.22484009999999,
  });

  // ICONS PARA LOJA
  const storeIcon = new L.Icon({
    iconUrl: catarinaPino,
    iconSize: [40, 40],
  });

  // ICONS PARA USERS
  const userIcon = L.icon({
    iconUrl: yellowPino,
    iconSize: [40, 40],
  });
  L.Marker.prototype.options.icon = userIcon;

  const createCustomClusterIcon = (cluster) => {
    return new L.divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: L.point(30, 30, true),
    });
  };

  return (
    <div className="map-container">
      <MapContainer markerZoomAnimation={true} attributionControl={false} center={center} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LeafletGeocoder/>
        <MyLocation position={userLocation}/>
        {stores.map((store, index) => (
          <Marker
            key={index}
            position={[store.lat, store.lgn]}
            icon={storeIcon}
          >
            <Popup className="leaflet-popup" closeButton={false}>
              <div className="leaflet-popup-content-wrapper">
                <div className="leaflet-popup-content">
                  <div className="popup-text">
                    <h3>{store.address}</h3>
                    <span>{store.cep}</span>
                  </div>
                  <button className="popup-button">
                    <div className="button-text">
                      <h4>{store.name}</h4>
                      <span>{store.address}</span>
                      <p>COMO CHEGAR</p>
                    </div>
                    <div className="button-img">
                      <img src={whiteArrow} alt="Seta" />
                    </div>
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapRender;
