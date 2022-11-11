import { useEffect } from 'react';

const ElDrawManager = ({ map, setData }) => {

  useEffect(() => {
    const drawingManager = new google.maps.drawing.DrawingManager({
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

    window.google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
      if (event.type == 'marker') {
        setData(prev => {
          return { ...prev, markers: [...prev.markers, event.overlay] }
        });
      }
      if (event.type == 'circle') {
        var radius = event.overlay.getRadius();
        setData(prev => {
          return { ...prev, circles: [...prev.circles, event.overlay] }
        });
      }
      if (event.type == 'polygon') {

        setData(prev => {
          return { ...prev, polygons: [...prev.polygons, event.overlay] }
        });
      }
      if (event.type == 'polyline') {

        setData(prev => {
          return { ...prev, polylines: [...prev.polylines, event.overlay] }
        });
      }
      if (event.type == 'rectangle') {

        setData(prev => {
          return { ...prev, rectangles: [...prev.rectangles, event.overlay] }
        });
      }
    });

    drawingManager.setMap(map);

  }, [map]);

  return null;

};

export default ElDrawManager;