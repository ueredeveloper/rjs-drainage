import React from 'react';

import { Wrapper } from "@googlemaps/react-wrapper";
import { ElMap } from '../map';

function Subterraneo({ center, zoom, onClick, map, setMap }) {
  return (
    <div>
      <div id="subterraneo"> Subterrânea </div>
      <Wrapper apiKey={"AIzaSyDELUXEV5kZ2MNn47NVRgCcDX-96Vtyj0w"} >
        <ElMap center={center} zoom={zoom} onClick={onClick} map={map} setMap={setMap} />
      </Wrapper>
    </div>
  )
}

export default Subterraneo;