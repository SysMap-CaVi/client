import { useState, useEffect } from "react";
import { useMap, Marker } from "react-leaflet";
import L from "leaflet";

function MyLocationButton() {
  const [myLocation, setMyLocation] = useState(null);
  const map = useMap();

  useEffect(() => {
    if (myLocation) {
      map.flyTo([myLocation.lat, myLocation.lng], 17);
      L.marker(myLocation).addTo(map);
    }
  }, [myLocation, map]);

  const showMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMyLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          alert(
            "Para usar esta funcionalidade, é necessário permitir o acesso à sua localização nas configurações do navegador "
          );
        }
      );
    } else {
      alert("Navegador não suporte geolocalização.");
    }
  };

  return (
    <>
      <button
        style={{
          position: "absolute",
          top: "80px",
          left: "10px",
          zIndex: 1000,
        }}
        onClick={showMyLocation}
      >
        My Location
      </button>
    </>
  );
}

export default MyLocationButton;
