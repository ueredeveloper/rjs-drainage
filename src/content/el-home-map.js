import React, { useEffect, useState } from 'react';
import { Wrapper } from "@googlemaps/react-wrapper";
import { ElMap, ElDrawManager, ElMarker, ElPolygon } from './map';
import ElMapControllers from './el-map-controllers';
import { getShape } from '../services';
//import { shape } from 'prop-types';
/**
* Element Home Map
*
*/
function ElHomeMap({ tab, mode, center, zoom, onClick, map, setMap, data, setData }) {
  /**
  * Manter os polígonos para não precisar toda hora acessar o servidor, busca uma vez e salva nesta variável.
  */
  const [_shapes, _setShapes] = useState({
    fraturado: { polygons: [] },
    poroso: { polygons: [] }
  })
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
    /**
  * Limpar o mapa. Primeiramente testando com as shapes do fraturado, depois todos os elementos do mapa.
Ideia: Colocar uma variável global para não precisar toda hora buscar no bancho e um botão para limpar se preciso essa variável global, talvez no meu à esquerda um clear no fim das opções.
  *
  */
  function setMapNull() {
    setData(prev => {
      return {
        ...prev,
        shapes: {
          // primeiramente somente o tubular
          //fraturado:  { checked: false, shapes: [] },
          ...prev.shapes,
          ...prev.shapes.fraturado.checked = false,
          ...prev.shapes.fraturado.shapes = []
        }
      }
    });
  }

  /**
  * Setar os polígonos da shape do fraturado ou fraturado
  *
  */
  
  function setPolygons(shape, polygons) {
    setData(prev => {
      return {
        ...prev,
        shapes: {
          ...prev.shapes, ...prev.shapes[shape].shapes = polygons
        }
      }
    });

  }

  useEffect(() => {

    let { checked, shapes } = data.shapes.fraturado;
    /**
    * Buscar no servidor se estiver as duas variáveis vazias {data.shapes e _shape}, caso contrário 
    buscar os dados na variável _shapes que já foi preenchida com os polígonos fraturado ou fraturado.
    */
    if (checked && shapes.length === 0 && _shapes.fraturado.polygons.length === 0) {

      _getShape('fraturado').then(_polygons => {

        setPolygons('fraturado', _polygons)
        _setShapes(prev => {
          return {
            ...prev,
            fraturado: { polygons: _polygons }
          }
        })
      });
    } else if (checked && shapes.length === 0 && _shapes.fraturado.polygons.length > 0) {
      console.log('else if')
      setPolygons('fraturado', _shapes.fraturado.polygons);
    }

  }, [data, setPolygons, _shapes])

  async function _getShape(shape) {
    let _shape = await getShape(`hidrogeo_${shape}`);
    return _shape;
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
        {
          data.shapes.fraturado.shapes.map((shape, i) => {
            return (
              <ElPolygon key={i} shape={shape} map={map} />
            )
          })
        }
        {
          data.shapes.poroso.shapes.map((shape, i) => {
            return (
              <ElPolygon key={i} shape={shape} map={map} />
            )
          })
        }

        <ElMarker
          info={data.overlays.marker}
          options={{ position: data.overlays.marker.position, map: map }} />

      </Wrapper>
      <ElMapControllers setChecked={setChecked} setMapNull={setMapNull} />
    </div>
  )
}

export default ElHomeMap;