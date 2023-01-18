import { useEffect, useState } from 'react';

const ElMarker = ({ info, options }) => {

  const [marker, setMarker] = useState();
  /**
  * Setar o ícone do marcador.
  * @param {integer} tp_id Tipo do poço, tp_id = 1, poço manual - verde, tp_id = 2, poço tubular - azul. Se nulo, é um ponto clicado pelo usuário.
  */
  function setIcon(tp_id) {
    if (tp_id === 1) {
      return `https://www.google.com/intl/en_us/mapfiles/ms/micons/green-dot.png`
    } else if (tp_id === 2) {
      return `https://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png`
    } else {
      return `https://www.google.com/intl/en_us/mapfiles/ms/micons/orange-dot.png`
    }
  }

  useEffect(() => {

    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }
    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {

  }, [marker, options, info])
  if (marker) {
    marker.setOptions({ ...options, icon: setIcon(info.tp_id) });
  }
  return null;

};

export default ElMarker;