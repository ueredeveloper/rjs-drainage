import { useEffect, useState } from 'react';

/**
* Elemento de Polígono gmaps api.
*
*
*/
const ElPolygon = ({ info, options }) => {

  const [polygon, setPolygon] = useState();

  useEffect(() => {

    if (!polygon) {
      setPolygon(new window.google.maps.Polygon());
    }
    // remove polígono do mapa - unmount
    return () => {
      if (polygon) {
        polygon.setMap(null);
      }
    };
  }, [polygon]);

  useEffect(() => {

  }, [polygon, options, info])
  if (polygon) {
    polygon.setOptions({ ...options });
  }
  return null;

};

export default ElPolygon;