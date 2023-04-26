import React, { useEffect } from "react";
import L, { icon } from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import { useMap } from "react-leaflet";
import stores from "../../mocks/mocks";
import store from "../../assets/icons/store.ico";

const RoutingMachine = () => {
  const map = useMap();

  const geocoder = L.Control.geocoder({
    collapsed: true,
    placeholder: "Digite o endereço",
    defaultMarkGeocode: true,
  })

  const customIcon = new L.Icon({
    iconUrl: store,
    iconSize: [40, 40],
  });

  useEffect(() => {
    geocoder.on("markgeocode", function (e) {
        var latlng = e.geocode.center;
        L.marker(latlng)
        .addTo(map)
        .bindPopup(e.geocode.name)
        .openPopup();
        map.fitBounds(e.geocode.bbox)

        // stores.map((store, index) => (
        //     L.marker([store.locale.lat, store.locale.lon], icon={customIcon} ).addTo(map),
        //     console.log([store.locale]),
        //     L.Routing.control({
        //       waypoints: [
        //         L.latLng(latlng),
        //         L.latLng(store.locale.lat, store.locale.lon),
        //       ],
        //       lineOptions: {
        //         styles: [
        //           {
        //             color: "blue",
        //             weight: 4,
        //             opacity: 0.7,
        //           },
        //         ],
        //       },
        //       routeWhileDragging: false,

        //       geocoder: L.Control.Geocoder.nominatim(),
        //     }).addTo(map).hide()))
      })
      .addTo(map);
  }, []);
  return null;
};

export default RoutingMachine;
