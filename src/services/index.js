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
* Buscar a shape hidrogeo_fraturado no banco de dados
*
  */
async function getFraturado() {
  let _fraturado = await fetch(url + '/getFraturado', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => {
    return response.json();
  })

  return _fraturado;
}
/**
* Buscar a shape hidrogeo_poroso no banco de dados
  */
async function getPoroso() {
  let _poroso = await fetch(url + '/getPoroso', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => {
    return response.json();
  })

  return _poroso;
}


export { findPointsInsidePolygon, findPointsInsideRectangle, findPointsInsideCircle, getFraturado, getPoroso }