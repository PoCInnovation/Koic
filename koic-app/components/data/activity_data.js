import raven from './raven.json'
import boar from './boar.json'
import {IP} from '@env'

// let raven = [];
// // let boar = [];
// (async () => {
//   const res = await fetch('http://' + `${IP}` + ':5000/api/animals/raven');
//   print(res)
//   raven = await res.json();
//   // const res1 = await fetch('http://' + `${IP}` + ':5000/api/animals/boar');
//   // boar = await res1.json();
// })();

const day = () => {
  const day = new Date().getDate() + "";
  const month = new Date().getMonth() + 1 + "";
  const year = new Date().getFullYear() + "";
  
  if (day.length === 1)
    return year + "-" + month + "-" + "0" + day;
  else if (month.length === 1)
    return year + "-" + "0" + month + "-" + day;
  else
    return year + "-" + month + "-" + day;
}

const date = day();

function parse (props) {
  
  let array = new Array
  let nb = 1;
  let hour = ''
  let len = Object.keys(props.detections).length
  let add = '';
  let notpush = false

  if (len < 1) {
    array.push({x: 0, y: 0})
    return array
  }
  for (let i = 0; i < len; i++) {
    let test = props.detections[i].detected_at;
    if (test.includes(date)) {
      for (let j = 0; j < test.length; j++) {
        if (j > 10 && j < 13) {
          hour = hour + test[j]
          for (let a = i; a < len; a++) {
            for (let b = 0; b < props.detections[a].detected_at.length; b++)
              if (b > 10 && b < 13) {
                add = add +  props.detections[i].detected_at[b];
              }
            }
            for (let i = 0; i < Object.keys(array).length; i++) {
              let isMany = array[i].x
              if (isMany === Number(hour)) {
                array[i].y += 1
                notpush = true
              }
            }
            add = ''
        }
      }
      if (notpush === false) {
        array.push({x: Number(hour), y: nb})
      }
      hour = '';
      nb = 1;
    }
  }
  return array
}

export const boarData = parse(boar);
export const ravenData = parse(raven);

export function maxHour(data) {
  if (Object.keys(data).length < 1) {
    return ('0h')
  }
  let max = data[0].x;
  for (let i = 0; i < Object.keys(data).length; i++) {
    if (data[i].x > max)
      max = data[i].x;
  }
  return (max + 'h');
}

export function maxNb(data) {
  if (Object.keys(data).length < 1) {
    return '0';
  }
  let max = data[0].y;

  for (let i = 0; i < Object.keys(data).length; i++) {
    if (data[i].y > max)
      max = data[i].y;
  }
  return max + '';
}

export function maxGlobal(maxR, maxB) {
  max = ''
  animal = ''
  if (maxR > maxB) {
    max = maxR
    animal = 'Raven'
  } else {
    max = maxB
    animal = 'Boar'
  }
  console.log(max + ' ' + animal)
  return max + '\n' + animal;
}

export let maxNbRaven = maxNb(ravenData) + ''
export let maxHourRaven = maxHour(ravenData) + ''
export let maxNbBoar = maxNb(boarData) + ''
export let maxHourBoar = maxHour(boarData) + ''
export let maxHourGlobal = maxGlobal(maxHourRaven, maxHourBoar)
export let maxNbGlobal = maxGlobal(maxNbRaven, maxNbBoar)
