// mudar para https://njs-adasa-postgres.ueredeveloper.repl.co
const url = 'https://adasa-postgres.ueredeveloper.repl.co';

async function findPointsInsidePolygon(polygon) {

  console.log(JSON.stringify(polygon))
  let points = await fetch(url + '/findPointsInsidePolygon', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(polygon)
  }).then(response => {
    return response.json();
  })

  return points;
}
async function findPointsInsideCircle(circle) {

  let points = await fetch(url + '/findPointsInsideCircle', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(circle)
  }).then(response => {
    return response.json();
  })

  return points;
}
async function findPointsInsideRectangle(rectangle) {
  let points = await fetch(url + '/findPointsInsideRectangle', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rectangle)
  }).then(response => {
    return response.json();
  })

  return points;
}
/**
* Buscar a shape solicitada no servidor
* @param shape Pode ser os valores 'hidrogeo_fraturado' ou 'hidrogeo_poroso'
*
  */
async function getShape(shape) {

  let response = await fetch(url + `/getShape?shape=${shape}`, {
    method: 'GET',
    headers: {
      Accept: 'application/JSON',
      'Content-Type': 'application/JSON',
    }

  }).then(res => {
    return res.json();
  })
  return response;
}
/**
* Através de uma coordenada buscar todos os pontos no sistema ao qual pertence a coordenada
* @param lat Latitude
*  @para lng Longitue
*
  */
async function findPointsInASystem(lat, lng) {

  let response = await fetch(url + `/findPointsInASystem?lat=${lat}&lng=${lng}`, {
    method: 'GET',
    headers: {
      Accept: 'application/JSON',
      'Content-Type': 'application/JSON',
    }

  }).then(res => {
    return res.json();
  })
  return response;
}


export { findPointsInsidePolygon, findPointsInsideRectangle, findPointsInsideCircle, getShape, findPointsInASystem }