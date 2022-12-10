import { useEffect } from 'react';

const ElMarker = ({ marker, map }) => {
  /**
  * Setar o ícone do marcador.
    * @param {integer} tp_id Tipo do poço, tp_id = 1, poço manual - vere, tp_id = 2, poço tubular - azul.
    */
  function setIcon(tp_id) {
    if (tp_id === 1) {
      return `https://www.google.com/intl/en_us/mapfiles/ms/micons/green-dot.png`
    } else {
      return `https://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png`
    }
  }

  useEffect(() => {

    if (marker) {
      //int_shape: coordinates: [0: -47.71305510399998 1: -15.826772622999954]
      let coord = marker.int_shape.coordinates;
      // coordenadas gmaps -> {lat: ..., lng: ...}
      let latlng = { lat: coord[1], lng: coord[0] }

      let _marker = new window.google.maps.Marker({
        position: latlng,
        icon: setIcon(marker.tp_id),
        map: map,
        title: "Hello World!",
      });

      _marker.setMap(map);
    }

  }, [map, marker]);

  return null;

};

export default ElMarker;