
const url = 'https://adasa-postgres.ueredeveloper.repl.co';

async function findPointsInsidePolygon(polygon) {
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


export {findPointsInsidePolygon, findPointsInsideRectangle, findPointsInsideCircle}