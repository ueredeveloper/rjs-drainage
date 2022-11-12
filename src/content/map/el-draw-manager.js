import { useEffect } from 'react';
/**
* Adiciona marcador, círculo, polígono, poliline e retângulo ao mapa.
  * @param {Object} map Map inicializado gmaps api.
  * @param {function} setData Função de adição de objectos geométricos à variável `data`.
  */
const ElDrawManager = ({ map, setData }) => {

  useEffect(() => {

    let _draw = new google.maps.drawing.DrawingManager({
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

    window.google.maps.event.addListener(_draw, 'overlaycomplete', function(event) {
      if (event.type == 'marker') {
        setData(prev => {
          return { ...prev, geral: { ...prev.geral, markers: [...prev.geral.markers, event.overlay] } }
        });
      }
      if (event.type == 'circle') {
        var radius = event.overlay.getRadius();
        setData(prev => {
          return { ...prev, geral: { ...prev.geral, circles: [...prev.geral.circles, event.overlay] } }
        });
      }
      if (event.type == 'polygon') {

        setData(prev => {
          return { ...prev, geral: { ...prev.geral, polygons: [...prev.geral.polygons, event.overlay.getPath().getArray()] } }
        });
      }
      if (event.type == 'polyline') {

        setData(prev => {
          return { ...prev, geral: { ...prev.geral, polylines: [...prev.geral.polylines, event.overlay] } }
        });
      }
      if (event.type == 'rectangle') {
        setData(prev => {
          return { ...prev, geral: { ...prev.geral, rectangles: [...prev.geral.rectangles, event.overlay] } }
        });
      }
    });
    _draw.setMap(map);

  }, [map]);

  return null;

};

export default ElDrawManager;