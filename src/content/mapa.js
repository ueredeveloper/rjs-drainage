import React, { useEffect, useState } from 'react';
import { Wrapper } from "@googlemaps/react-wrapper";
import { ElMap, ElDrawManager } from './map';
import ElPolilyne from './map/el-polilyne';

function Mapa({ tab, mode, center, zoom, onClick, map, setMap, data, setData }) {

  const [path, setPath] = useState([])
  useEffect(() => {
    /*
        data.geral.polygons.forEach(polygon => {
          let arcgis = gmapsToArcGis(polygon);
          //    console.log(arcgis)
        });*/
    console.log(data.geral.rectangles)
  }, [data]);

  return (
    <div>
      <Wrapper apiKey={"AIzaSyDELUXEV5kZ2MNn47NVRgCcDX-96Vtyj0w"} libraries={["drawing"]}>
        <ElMap mode={mode} center={center} zoom={zoom} onClick={onClick} map={map} setMap={setMap} />
        {/* Desenhar círculos, polígonos etc */}
        <ElDrawManager map={map} tab={tab} data={data} setData={setData} />
        {
          data.geral.circles.map((circle, i) => {
            return <ElPolilyne key={i} map={map} path={circle.rings} />
          })
        }
      </Wrapper>
    </div>
  )
}

export default Mapa;