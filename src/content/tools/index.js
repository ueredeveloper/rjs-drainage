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
  if (arcGis[0][0][0] != arcGis[0][arcGis[0].length-1][0]) {
    arcGis[0].push(arcGis[0][0])
  }
  return arcGis;
}

export {gmapsToArcGis}