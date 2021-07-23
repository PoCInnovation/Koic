import raven from './raven.json'

const day =()=>{
  
  var day = new Date().getDate() + '';
  var month = new Date().getMonth() + 1 + '';
  var year = new Date().getFullYear() + '';
  
  if (day.length == 1)
    return year + "-" + month + "-" + "0" + day;
  else if (month.length == 1)
    return year + "-" + "0" + month + "-" + day;
  else
    return year + "-" + month + "-" + day;
}

let date = day()

function parse (props) {
  
  var array = new Array
  var nb = 1;
  var hour = ''
  var len = Object.keys(props.detections).length
  var add = '';

  for (let i = 0; i < len; i++) {
    var test = props.detections[i].detected_at;
    if (test.includes(date)) {
      for (let j = 0; j < test.length; j++) {
        if (j > 10 && j < 13) {
          hour = hour + test[j]
          console.log(hour)
          console.log(test)
          for (let a = i; a < len; a++) {
            for (let b = 0; b < props.detections[a].detected_at.length; b++)
              if (b > 10 && b < 13) {
                add = add +  props.detections[i].detected_at[b];
              }
            }
            if (hour.includes(add)) {
              nb++;
            }
            add = ''
        }
      }
    }
    array.push({x: Number(hour), y: nb})
    hour = '';
    nb = 1;
  }
  console.log(array)
  return array
}

export const boarData = [{x: 0, y: 2}];
export const ravenData = parse(raven);

export const maxHour = () => {

  var max = ravenData[0].x;

  for (let i = 0; ravenData[i].x; i++) {
    if (ravenData[i].x > max)
      max = ravenData[i].x;
  }
  console.log(ravenData)
  console.log(max)
  return (max);
}

export const maxNb = () => {

  var max = ravenData[0].x;

  for (let i = 0; ravenData[i].y; i++) {
    if (ravenData[i].y > max)
      max = ravenData[i].y;
  }
  console.log(ravenData)
  console.log(max)
  return (max);
}

// else {
//   for (let s = 0; s < array.length; s++) {
//         console.log(array.length)
//         // console.log(hour)
//         // console.log(array[s].x)
//         if (array[s].x !== Number(hour))
//           array.push({x: Number(hour), y: nb})
//   }

