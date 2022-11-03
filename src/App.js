import './App.css';
import React, { useState } from 'react';
import { ElNavBar } from './content';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Home, Superficial, Subterraneo } from './content';

let path = [];

function App() {

  const [dark, setDark] = useState(false);

  const [map, setMap] = useState();
  const center = { lat: -15.794393510614238, lng: -47.670852661132805 };
  const zoom = 10;
  /*
  const [data, setData] = useState({
    markers: [],
    polilynes: [{ finish: false }],
    circles: []
  });
  */
 const [data, setData] = useState([])
  const onClick = function(e) {
    //console.log({ lat: e.latLng.lat(), lng: e.latLng.lng() })
    if (typeDraw === 'Marker') {

      let options = {
        position: { lat: e.latLng.lat(), lng: e.latLng.lng() },
        map: map,
        title: "Hello World!",
      }

      setData(prev => {
     //   return { ...prev, markers: [...prev.markers, { options }] }
      });
    }
    else if (typeDraw === 'Circle') {
      let options = {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: { lat: e.latLng.lat(), lng: e.latLng.lng() },
        radius: Math.sqrt(100) * 100,
      }

      setData(prev => {
      //  return { ...prev, circles: [...prev.circles, { options }] }
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
      /*
      setData(prev => {
        let len = prev.polilynes.length;
        if (prev.polilynes[len - 1].finish === false) {
          return { ...prev, ...prev.polilynes[len - 1] = options }
        } else {
          return { ...prev, polilynes: [...prev.polilynes, options] }
        }
      })*/
    //  console.log(data.polilynes);
    }
  }

  const clearMarkers = () => {
    /*
    setData(prev => {
      // retirar os marcardores do mapa
      prev.markers.forEach(m => {
        m.options.map = null
      });
      // retirar os marcadores do estado => data
      return { ...prev, markers: [] }
    })*/
  }
  const finishPolilyne = () => {
    path = [];
    // setar finish = true na poliline criada
    /*
    setData(prev => {
      let len = prev.polilynes.length;
      return { ...prev, ...prev.polilynes[len - 1].finish = true }
    })*/
  }
  const [typeDraw, setTypeDraw] = useState('Circle')
  const createPolilyne = () => {
    setTypeDraw('Polyline')
  }
  const createMarker = () => {
    setTypeDraw('Marker')
  }

  const createCircle = () => {
    setTypeDraw('Circle')
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home dark={dark} center={center} zoom={zoom} onClick={onClick} map={map} setMap={setMap} data={data} setData={setData} />,
    },
    {
      path: "/superficial",
      element: <Superficial dark={dark} center={center} zoom={zoom} onClick={onClick} map={map} setMap={setMap} />,
    },
    {
      path: "/subterraneo",
      element: <Subterraneo dark={dark} center={center} zoom={zoom} onClick={onClick} map={map} setMap={setMap} />,
    },
  ]);


  return (
    <div className={`${dark ? 'dark' : 'light'}`}>
      <ElNavBar dark={dark} setDark={setDark} />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
