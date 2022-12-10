import { useEffect } from 'react';
//import { createCircleRings } from '../tools';
import { findPointsInsidePolygon, findPointsInsideRectangle, findPointsInsideCircle } from '../../services';
/**
* Adiciona marcador, círculo, polígono, poliline e retângulo ao mapa.
  * @param {Object} map Map inicializado gmaps api.
  * @param {function} setData Função de adição de objectos geométricos à variável `data`.
  */
const ElDrawManager = ({ map, setData }) => {

  useEffect(() => {

    let _draw = new window.google.maps.drawing.DrawingManager({
      drawingMode: window.google.maps.drawing.OverlayType.CIRCLE,
      drawingControl: true,
      drawingControlOptions: {
        position: window.google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          window.google.maps.drawing.OverlayType.MARKER,
          window.google.maps.drawing.OverlayType.CIRCLE,
          window.google.maps.drawing.OverlayType.POLYGON,
          window.google.maps.drawing.OverlayType.RECTANGLE,
        ],
      },
      markerOptions: {
        // icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      },
      circleOptions: {
        fillColor: "#ffff00",
        fillOpacity: 0.2,
        strokeWeight: 1,
        clickable: false,
        editable: true,
        zIndex: 1,
      },
    });

    window.google.maps.event.addListener(_draw, 'overlaycomplete', async function(event) {
      if (event.type === 'marker') {
        setData(prev => {
          return { ...prev, geral: { ...prev.geral, markers: [...prev.geral.markers, event.overlay] } }
        });
      }
      if (event.type === 'circle') {
        let { center, radius } = event.overlay;
        let markers = await findPointsInsideCircle(
          {
            center: { lng: center.lng(), lat: center.lat() },
            radius: parseInt(radius)
          }
        );
        let id = Date.now();

        setData(prev => {
          return {
            ...prev,
            geral: {
              ...prev.geral,
              circles: [
                ...prev.geral.circles, { id: id, center: center, radius: radius }],
              markers: [
                ...prev.geral.markers, { id: id, markers }]
            },
          }
        });
      }
      if (event.type === 'polygon') {
        // retorna array de coordenada no formato gmaps, ex: [{lat: -15, lng: -47}, ...]   
        let polygon = [];
        event.overlay.getPath().getArray().forEach(p => {
          polygon.push([p.lng(), p.lat()])
        });

        polygon = [...polygon, polygon[0]]
        let id = Date.now();
        let markers = await findPointsInsidePolygon(polygon);

        setData(prev => {
          return {
            ...prev,
            geral: {
              ...prev.geral,
              polygons: [...prev.geral.polygons, {
                id: id,
                rings: event.overlay.getPath().getArray().map(ll => { return { lat: ll.lat(), lng: ll.lng() } })
              }],
              markers: [
                ...prev.geral.markers, {
                  id: id,
                  markers
                }
              ]
            },
          }
        });
      }
      /* Criação de um polígono a partir de um retângulo gmaps api
      */
      if (event.type === 'rectangle') {
        let bounds = event.overlay.getBounds();
        let NE = bounds.getNorthEast();
        let SW = bounds.getSouthWest();
        let id = Date.now();
        /** SUPABASE
         * Buscar pontos em um retângulo
         * @param nex {float} Noroeste longitude
         * @param ney {float} Noroeste latitude
         * @param swx {float} Sudoeste longitude
         * @param swy {float} Sudoeste longitude
         * @returns {array[]} Interferencias outorgadas.
       */
        let rectangle = { nex: NE.lng(), ney: NE.lat(), swx: SW.lng(), swy: SW.lat() }
        let markers = await findPointsInsideRectangle(rectangle);

        setData(prev => {
          return {
            ...prev,
            geral: {
              ...prev.geral,
              rectangles: [...prev.geral.rectangles, { id: id, ne: NE, sw: SW }],
              markers: [
                ...prev.geral.markers, {
                  id: id,
                  markers
                }
              ]
            },
          }
        });
      }
    });
    _draw.setMap(map);

  }, [map]);


  return null;

};

export default ElDrawManager;