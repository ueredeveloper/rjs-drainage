import React, { useEffect, useRef, useState } from 'react';
import { darkMap } from './dark-map';
/**
  * Elemento mapa
*/

function ElMap({ mode, center, zoom, onClick, map, setMap }) {

  const ref = useRef();

  useEffect(() => {

    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
        })
      );
    }

    if (map) {
      ["click"].forEach((e) =>
        window.google.maps.event.clearListeners(map, e)
      );
      map.addListener("click", onClick);
    }
  }, [ref, map, onClick]);
  /**
  * Setar mapa noturno ao escolher o tema dark.
    *
    *
    */
  useEffect(() => {
    if (map) {
      mode === "dark" ? map.setOptions({ styles: darkMap }) : map.setOptions({ styles: [] });
    }

  }, [map, mode])


  return (
    <div className="h-80" ref={ref} id="map" />
  );

}

export default ElMap;

