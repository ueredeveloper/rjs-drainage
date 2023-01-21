/**
*  Converter uma união de shapes feita na jtst com formato do gmaps api para o formato que possa ser utilizado na arcgis rest service.
*  @param {object[]} rings Array com coordenadas no formato gmaps api, ex: [{lat: -17, lng: -47},...]
*  @returns {object[]} arcGis. Array no formato Arg Gis Rest Service, ex: [[[-47...,-15...],...,[-48...,-16...]]]
*/
const gmapsToArcGis = (rings) => {
  // arcGis = [[]] => [[[-47,-16], [-47,-17], [-47,-18]]]
  let arcGis = [[]];
  rings.forEach(r => {
    // adicionar tudo na posição 0 da array.
    arcGis[0].push([r.lng(), r.lat()])
  })
  // adicionar a primeira coordenada no final do polígono para fechar completamente
  if (arcGis[0][0][0] != arcGis[0][arcGis[0].length - 1][0]) {
    arcGis[0].push(arcGis[0][0])
  }
  return arcGis;
}
/**
  * Criar linhas para cada ângulo do círculo (0 a 360º) e assim construir um polígono em formato circular para buscas de outorgas.
  * @param {object} center. Latitude e longitude do centro de um círculo.
  * @param {number} radius. Raio do circulo desenhado
  * @return {array} rings. Retorna polígono em formato de círculo.
  */
function createCircleRings(center, radius) {
  let angle = { start: 0, end: 360 }
  let rings = [];
  let i = angle.start;
  // convert metros par km
  radius = radius * 0.0000092

  while (i < angle.end) {
    let path = [
      { lat: center.lat, lng: center.lng },
      { lat: center.lat + (Math.sin(i * Math.PI / 180)) * radius, lng: center.lng + (Math.cos(i * Math.PI / 180)) * radius }
    ];
    // retirar a coordenada do centro, só importa a segunda de cada linha criada
    rings.push(path[1]);
    i++;
  }
  return rings;
}
/*
*
  *
  */
function converterPostgresToGmaps(shape) {

  if (shape.shape.type === 'MultiPolygon') {
    
    let _paths = shape.shape.coordinates.map(coord => {
      return coord[0].map(c => {
        return { lat: parseFloat(c[1]), lng: parseFloat(c[0]) }
      })
    })
    return _paths
  } else {

    let _paths = shape.shape.coordinates.map(coord => {
      return coord.map(c => {
        return { lat: parseFloat(c[1]), lng: parseFloat(c[0]) }
      })
    })
    return _paths
  }
}

export { gmapsToArcGis, createCircleRings, converterPostgresToGmaps }