// REACT-LEAFLET
import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";
import L from "leaflet";
// DADOS DAS LOJAS PARCEIRAS
import { stores } from "../../mocks/mocks";
// ÍCONES
import catarinaPino from "../../assets/icons/catarina-pino.png";
import yellowPino from "../../assets/icons/yellow-pino.svg";
import whiteArrow from "../../assets/icons/white-arrow.svg";
// CSS
import "./Style.css";
import "leaflet/dist/leaflet.css";
// REACT
import { useState, useEffect } from "react";
// BOTÃO DE MINHA LOCALIZAÇÃO
import MyLocation from "components/MyLocation/MyLocation";

// Função para animar o mapa até a localização(lat, lon) do endereço digitado no input
function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      console.log("teste 5", selectPosition);
      map.flyTo([selectPosition?.lat, selectPosition?.lon], 16, {
        animate: true,
        duration: 3,
        easeLinearity: 0.1,
        zoom: 18,
      });
    }
  }, [selectPosition]);

  return selectPosition === null ? null : (
    <Marker position={[selectPosition?.lat, selectPosition?.lon]}>
    </Marker>
  );
}

function MapRender({ userLocation, selectPosition }) {
  // console.log("teste 3", selectPosition);
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

  const redirectGoogleMaps = (destino) => {
    window.open("https://maps.google.com/maps?q=" + destino, "_blank")
  };

  return (
    <div className="map-container">
      <MapContainer
        markerZoomAnimation={true}
        attributionControl={false}
        center={center}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyLocation position={userLocation} />
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
                  <button className="popup-button" target="blank" onClick={() => {
                      redirectGoogleMaps(store.cep)
                    }}>
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
        <ResetCenterView selectPosition={selectPosition} />
      </MapContainer>
    </div>
  );
}

export default MapRender;
