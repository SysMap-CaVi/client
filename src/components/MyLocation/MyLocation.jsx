import { useEffect } from "react";
import { useMap, Marker } from "react-leaflet";

function MyLocation({position}) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 16, {
        animate: true,
        duration: 8,
        easeLinearity: 0.1,
        zoom: 12,
      });
    }
  }, [position]);

  return position === null ? null : (
    <Marker position={position}>
    </Marker>
  );
}

export default MyLocation;
