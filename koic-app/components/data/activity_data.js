import { IP } from '@env'

import parseIntruder from './parseIntruder'

function getMostAffluentHourInObject(data) {
  if (!Object.keys(data)) {
    return ('0h')
  }
  let max = data[0].x;
  for (const elem of Object.keys(data)) {
    if (elem.x > max)
      max = elem.x;
  }
  return (max + 'h');
}

function getMaxValueInObject(data) {
  if (!Object.keys(data)) {
    return '0';
  }
  let max = data[0].y;
  for (const elem of Object.keys(data)) {
    if (elem.y > max)
      max = elem.y;
  }
  return max.toString();
}

function getGlobalMaximum(maxR, maxB) {
  return `${maxR > maxB ? maxR : maxB}\n${maxR > maxB ? 'Raven' : 'Boar'}`
}

function fetchIntruder(intruder) {
  return fetch(`http://${IP}:5000/api/animals/${intruder}`).then((res) => {
    if (!res.ok) {
      throw Error('Failed fetching raven') // TODO
    }
    return res.json();
  }).then((intruder) => {
    return parseIntruder(intruder);
  }).catch(console.error)
}

function buildIntruderObject(intruder, data) {
  intruder.data = data
  intruder.maxValue = getMaxValueInObject(intruder.data).toString()
  intruder.mostAffluentHour = getMostAffluentHourInObject(intruder.data).toString()
}

const raven = {
  data: fetchIntruder('raven'),
  maxValue: undefined,
  mostAffluentHour: undefined  
}

const boar = {
  data: fetchIntruder('boar'),
  maxValue: undefined,
  mostAffluentHour: undefined  
}

const globalData = {
  maxValue: undefined,
  mostAffluentHour: undefined
}

Promise.all([raven.data, boar.data]).then(([ravenData, boarData]) => {
  buildIntruderObject(raven, ravenData)
  buildIntruderObject(boar, boarData)
  globalData.maxValue = getGlobalMaximum(raven.maxValue,  boar.maxValue)
  globalData.mostAffluentHour = getGlobalMaximum(raven.mostAffluentHour,  boar.mostAffluentHour)
})

export { boar, raven, globalData }