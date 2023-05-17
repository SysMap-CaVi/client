import { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

const LeafletGeocoder = () => {
  const map = useMap();

  const geocoder = L.Control.geocoder({
    collapsed: true,
    placeholder: "Digite o endereço",
    defaultMarkGeocode: true,
  });

  useEffect(() => {
    geocoder
      .on("markgeocode", function (e) {
        var latlng = e.geocode.center;
        L.marker(latlng)
          .addTo(map)
          .bindPopup(e.geocode.name)
          .openPopup()
          .closePopup();
        map.flyTo(latlng, 16, {
          animate: true,
          duration: 3,
          easeLinearity: 0.1,
          zoom: 12,
        });
      })
      .addTo(map);
  }, []);
  return null;
};

export default LeafletGeocoder;
