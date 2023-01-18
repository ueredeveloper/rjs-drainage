import React from 'react';
import { Wrapper } from "@googlemaps/react-wrapper";
import { ElMap, ElDrawManager, ElMarker, ElPolygon } from './map';
import ElMapControllers from './el-map-controllers'
/**
* Element Home Map
*
*/
function ElHomeMap({ tab, mode, center, zoom, onClick, map, setMap, data, setData }) {
  /**
  * Mudar estado dos botões checkbox e assim verificar se é para retirar ou adicionar shapes no mapa.
  *
  */
  function setChecked(shape, checked) {
    setData(prev => {
      return {
        ...prev,
        shapes: {
          ...prev.shapes, ...prev.shapes[shape].checked = checked
        }
      }
    })

  }

  return (
    <div>
      <Wrapper apiKey={"AIzaSyDELUXEV5kZ2MNn47NVRgCcDX-96Vtyj0w"} libraries={["drawing"]}>
        <ElMap mode={mode} center={center} zoom={zoom} onClick={onClick} map={map} setMap={setMap} />
        {/* Desenhar círculos, polígonos etc */}
        <ElDrawManager map={map} tab={tab} data={data} setData={setData} />
        {/*
          data.overlays.circles.map((circle, i) => {
            return <ElPolilyne key={i} map={map} path={circle.rings} />
          })
        */}
        {/*marcadores*/}
        {
          data.overlays.markers.map(markers => {

            return markers.points.map((info, ii) => {
              // coordenadas da outorga em formato geometry
              let [x, y] = info.int_shape.coordinates;
              return (
                <ElMarker
                  key={ii}
                  info={info}
                  // coordenada em formato gmaps
                  options={{ position: { lat: y, lng: x }, map: map }} />)
            })
          })
        }
        {/**
        data ...
        shapes: {
          fraturado: {checked: false, shapes:[]},
          poroso: {checked: false, shapes:[]}
        }
    */}
        {data.shapes.fraturado.shapes.map(f => {
          return (
            <ElPolygon />
          )
        })}
        <ElMarker
          info={data.overlays.marker}
          options={{ position: data.overlays.marker.position, map: map }} />

      </Wrapper>
      <ElMapControllers setChecked={setChecked} />
    </div>
  )
}

export default ElHomeMap;