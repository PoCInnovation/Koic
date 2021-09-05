import { IP } from '@env'

import parseIntruder from './parseIntruder'

function getMostAffluentHourInObject({ maxValue, data }) {
  return data.findIndex((elem) => elem === maxValue)
}

function getMaxValueInObject(data) {
  return Math.max(...data)
}

function getGlobalMaximum(maxR, maxB) {
  return `${maxR > maxB ? maxR : maxB}\n${maxR > maxB ? 'Raven' : 'Boar'}`
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

const boar = {
  data: fetchIntruder('boar'),
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

Promise.all([raven.data, boar.data, person.data]).then(([ravenData, boarData, personData]) => {
  buildIntruderObject(raven, ravenData)
  buildIntruderObject(boar, boarData)
  buildIntruderObject(person, personData)
  globalData.maxValue = getGlobalMaximum(raven.maxValue,  boar.maxValue)
  globalData.mostAffluentHour = getGlobalMaximum(raven.mostAffluentHour,  boar.mostAffluentHour)
})

export { boar, raven, person, globalData }