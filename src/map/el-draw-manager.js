import React, { useEffect, useState } from 'react';

const ElDrawManager = ({ map, data, setData }) => {

  useEffect(() => {

    console.log(data)

    const draw = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.MARKER,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.MARKER,
          google.maps.drawing.OverlayType.CIRCLE,
          google.maps.drawing.OverlayType.POLYGON,
          google.maps.drawing.OverlayType.POLYLINE,
          google.maps.drawing.OverlayType.RECTANGLE,
        ],
      },
      markerOptions: {
       // icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      },
      circleOptions: {
        fillColor: "#ffff00",
        fillOpacity: 1,
        strokeWeight: 5,
        clickable: false,
        editable: true,
        zIndex: 1,
      },
    });
    draw.setMap(map);
    setData(prev=> {
      return [...prev, draw]
    })
  }, [map]);

  return null;

};

export default ElDrawManager;