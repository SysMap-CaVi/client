import "./App.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

function App() {
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, eu sou um popup",
    },

    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, eu sou um popup",
    },

    {
      geocode: [48.855, 2.34],
      popUp: "Hello, eu sou um popup",
    },
  ];

  const customIcon = new Icon({
    iconUrl: require("./assets/img/marker.ico"),
    iconSize: [38, 38],
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(35, 35, true)
    })
  }


  return (
    <div className="App">
      <MapContainer center={[48.8566, 2.3522]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* https://leaflet-extras.github.io/leaflet-providers/preview/
        site para ver os temas de mapa alguns são pagos
        <TileLayer
        attribution="Stamen Watercolor"
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
        /> */}

        <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
        >
          {markers.map((marker) => (
            <Marker position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default App;
