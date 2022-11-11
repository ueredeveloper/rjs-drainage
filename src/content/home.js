import React from 'react';

import { Wrapper } from "@googlemaps/react-wrapper";
import { ElMap, ElDrawManager } from '../map';

function Home({ mode, center, zoom, onClick, map, setMap, data, setData }) {

  return (
    <div>
      <Wrapper apiKey={"AIzaSyDELUXEV5kZ2MNn47NVRgCcDX-96Vtyj0w"} libraries={["drawing"]}>
        <ElMap mode={mode} center={center} zoom={zoom} onClick={onClick} map={map} setMap={setMap} />
        {/* Desenhar círculos, polígonos etc */}
        <ElDrawManager map={map} data={data} setData={setData}/>
      </Wrapper>
    </div>
  )
}

export default Home;