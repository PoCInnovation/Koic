import { IP } from '@env'

import parseIntruder from './parseIntruder'

function getMostAffluentHourInObject({ maxValue, data }) {
  return data.findIndex((elem) => elem === maxValue)
}

function getMaxValueInObject(data) {
  return Math.max(...data)
}

function getGlobalMaximum(maxR, maxB) {
  return `${maxR > maxB ? maxR : maxB}\n${maxR > maxB ? 'Raven' : 'chair'}`
}

function fetchIntruder(intruder) {
  return fetch(`http://${IP}:5000/api/animals/${intruder}`)
  .then((res) => {
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
  intruder.maxValue = getMaxValueInObject(intruder.data)
  intruder.mostAffluentHour = getMostAffluentHourInObject(intruder)
}

const raven = {
  data: fetchIntruder('raven'),
  maxValue: undefined,
  mostAffluentHour: undefined  
}

const chair = {
  data: fetchIntruder('chair'),
  maxValue: undefined,
  mostAffluentHour: undefined  
}

const person = {
  data: fetchIntruder('person'),
  maxValue: undefined,
  mostAffluentHour: undefined  
}

const globalData = {
  maxValue: undefined,
  mostAffluentHour: undefined
}

Promise.all([raven.data, chair.data, person.data]).then(([ravenData, chairData, personData]) => {
  buildIntruderObject(raven, ravenData)
  buildIntruderObject(chair, chairData)
  buildIntruderObject(person, personData)
  globalData.maxValue = getGlobalMaximum(raven.maxValue,  chair.maxValue)
  globalData.mostAffluentHour = getGlobalMaximum(raven.mostAffluentHour,  chair.mostAffluentHour)
})

export { chair, raven, person, globalData }