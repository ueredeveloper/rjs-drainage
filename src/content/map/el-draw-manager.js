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
      drawingMode: window.google.maps.drawing.OverlayType.MARKER,
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
        let position = event.overlay.position

        //int_shape: coordinates: [0: -47.71305510399998 1: -15.826772622999954]
        //tp_id = null
        let id = Date.now();
        setData(prev => {
          return {
            ...prev,
            overlays: {
              ...prev.overlays,
              marker: { id: id, tp_id: null, int_shape: { coordinates: [position.lng(), position.lat()] } }
            }
          }
        });
        // retirar o marcador do mapa depois de capturar a coordenada
        event.overlay.setMap(null)

        /*
        setData(prev => {
          return { ...prev, overlays: { ...prev.overlays, markers: [...prev.overlays.markers, {id: id, latlng: event.overlay}] } }
        });
        */
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
            overlays: {
              ...prev.overlays,
              circles: [
                ...prev.overlays.circles, { id: id, center: center, radius: radius }],
              markers: [
                ...prev.overlays.markers, { id: id, markers }]
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
        let markers = await findPointsInsidePolygon(polygon);
        let id = Date.now();
        setData(prev => {
          return {
            ...prev,
            overlays: {
              ...prev.overlays,
              polygons: [...prev.overlays.polygons, {
                id: id,
                rings: event.overlay.getPath().getArray().map(ll => { return { lat: ll.lat(), lng: ll.lng() } })
              }],
              markers: [
                ...prev.overlays.markers, {
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
        let id = Date.now();
        setData(prev => {
          return {
            ...prev,
            overlays: {
              ...prev.overlays,
              rectangles: [...prev.overlays.rectangles, { id: id, ne: NE, sw: SW }],
              markers: [
                ...prev.overlays.markers, {
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