import React from 'react';
import { Wrapper } from "@googlemaps/react-wrapper";
import { ElMap, ElDrawManager, ElMarker } from './map';

function ElHomeMap({ tab, mode, center, zoom, onClick, map, setMap, data, setData }) {

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

            return markers.markers.map((marker, ii) => {
              return <ElMarker key={ii} marker={marker} map={map} />
            })
          })
        }
        <ElMarker marker={data.overlays.marker} map={map} />
      </Wrapper>
    </div>
  )
}

export default ElHomeMap;