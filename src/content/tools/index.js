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
  * Criar linhas para cada ângulo do círculo e assim construir um polígono circular para
  buscas de outorgas no círculo
  * @param {object} center. Latitude e longitude do centro de um círculo.
  * @param {number} radius. Raio do circulo desenhado
  * @return {array} Retorna um conjunto de coordenadas.
  */
function createCircle(center, radius) {
  let angle = { start: 0, end: 360 }
  let paths = [];
  let i = angle.start;
  radius = radius/110000

  while (i < angle.end) {
    let path = [
      { lat: center.lat, lng: center.lng },
      { lat: center.lat + (Math.sin(i * Math.PI / 180)) * radius, lng: center.lng + (Math.cos(i * Math.PI / 180)) * radius }
    ];
    // retirar a coordenada do centro, só importa a segunda de cada linha criada
    paths.push(path[1]);
    i++;
  }
  return paths;
}

export { gmapsToArcGis, createCircle }