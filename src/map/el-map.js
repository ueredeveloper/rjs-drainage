import React, { useEffect, useRef, useState } from 'react';
//import './index.css'
/**
* Map element
  *
  *
  */

function ElMap ({ map, setMap, center, zoom, onClick }) {

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

  return <div className="h-80" ref={ref} id="map" />;
}

export default ElMap;

