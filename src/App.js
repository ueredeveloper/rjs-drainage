import './App.css';
import { useState } from 'react';
import { Wrapper } from "@googlemaps/react-wrapper";
import { ElMap } from './map';


let path = []

function App() {

  const [dark, setDark] = useState(false);
  const [map, setMap] = useState();
  const center = { lat: -15.794393510614238, lng: -47.670852661132805 };
  const zoom = 10;
  const [data, setData] = useState({
    markers: [],
    polilynes: [{ finish: false }]
  });

  const onClick = function(e) {
    //console.log({ lat: e.latLng.lat(), lng: e.latLng.lng() })
    if (typeDraw === 'Marker') {

      let options = {
        position: { lat: e.latLng.lat(), lng: e.latLng.lng() },
        map: map,
        title: "Hello World!",
      }

      setData(prev => {
        return { ...prev, markers: [...prev.markers, { options }] }
      });
    }
    else {
      // retira o ultimo valor
      if (path.length > 0) path.pop();
      // adiciona o valor atual
      path = [...path, { lat: e.latLng.lat(), lng: e.latLng.lng() }]
      // adiciona o primeiro valor no fim da array para fechar a polilinha
      path.push(path[0]);

      let options = {
        finish: false,
        path: path,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map
      }
      setData(prev => {
        let len = prev.polilynes.length;
        if (prev.polilynes[len - 1].finish === false) {
          return { ...prev, ...prev.polilynes[len - 1] = options }
        } else {
          return { ...prev, polilynes: [...prev.polilynes, options] }
        }
      })
      console.log(data.polilynes);
    }
  }

  const clearMarkers = () => {
    setData(prev => {
      // retirar os marcardores do mapa
      prev.markers.forEach(m => {
        m.options.map = null
      });
      // retirar os marcadores do estado => data
      return { ...prev, markers: [] }
    })
  }
  const finishPolilyne = () => {
    path = [];
    // setar finish = true na poliline criada
    setData(prev => {
      let len = prev.polilynes.length;
      return { ...prev, ...prev.polilynes[len - 1].finish = true }
    })
  }
  const [typeDraw, setTypeDraw] = useState('Marker')
  const createPolilyne = () => {
    setTypeDraw('Polyline')
  }
  const createMarker = () => {
    setTypeDraw('Marker')
  }

  return (
    <div className={`${dark ? "dark" : "light"}`}>
      <div> tailwind working</div>
      <div> dark mode working </div>
      <div>map working</div>
      <Wrapper apiKey={"AIzaSyDELUXEV5kZ2MNn47NVRgCcDX-96Vtyj0w"} >
        {/*mapa*/}
        <ElMap center={center} zoom={zoom} onClick={onClick} map={map} setMap={setMap} />
      </Wrapper>
      <button className='bg-green-500 dark:bg-orange-500' onClick={() => { setDark(!dark) }}>{dark === true ? "Light" : "Dark"}</button>
    </div>
  );
}

export default App;
