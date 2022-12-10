import { useEffect } from "react";

const ElPolilyne = ({ map, path }) => {
  
  useEffect(() => {
    const polilyne = new google.maps.Polyline({
      path: path,
      geodesic: true,
      strokeColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
      strokeOpacity: 1.0,
      strokeWeight: 1,
    });
    polilyne.setMap(map);
  }, [map]);

  return null;
};
export default ElPolilyne;