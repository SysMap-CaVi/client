import { useState } from "react";
import Partners from "components/Partners/Partners";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MapRender from "./components/Map/MapRender";

function App() {
  const [userLocation, setUserLocation] = useState(null);
  const [selectPosition, setSelectPosition] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
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
    <div className="App">
      <Header
        getLocation={getLocation}
        selectPosition={selectPosition}
        setSelectPosition={setSelectPosition}
      />
      <MapRender userLocation={userLocation} selectPosition={selectPosition} />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
