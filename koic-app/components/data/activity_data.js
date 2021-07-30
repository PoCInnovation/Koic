// import raven from './raven.json'
var raven = fetch('http://127.0.0.1:5000/api/animals/raven')


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

// function parse (props) {
  
//   var array = new Array
//   var nb = 1;
//   var hour = ''
//   var len = Object.keys(props.detections).length
//   var add = '';

//   for (let i = 0; i < len; i++) {
//     var test = props.detections[i].detected_at;
//     if (test.includes(date)) {
//       for (let j = 0; j < test.length; j++) {
//         if (j > 10 && j < 13) {
//           hour = hour + test[j]
//           // console.log(hour)
//           // console.log(test)
//           for (let a = i; a < len; a++) {
//             for (let b = 0; b < props.detections[a].detected_at.length; b++)
//               if (b > 10 && b < 13) {
//                 add = add +  props.detections[i].detected_at[b];
//               }
//             }
//             if (hour.includes(add)) {
//               nb++;
//             }
//             add = ''
//         }
//       }
//     }
//     array.push({x: Number(hour), y: nb})
//     hour = '';
//     nb = 1;
//   }
//   // console.log(array)
//   return array
// }

function parse (props) {
  
  var array = new Array
  var nb = 1;
  var hour = ''
  var len = Object.keys(props.detections).length
  var add = '';
  var notpush = false

  if (len < 1) {
    array.push({x: 0, y: 0})
    return array
  }
  for (let i = 0; i < len; i++) {
    var test = props.detections[i].detected_at;
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
              var jsp = array[i].x
              if (jsp === Number(hour)) {
                console.log('ui')
                array[i].y += 1
                notpush = true
              }
            }
            add = ''
        }
      }
      if (notpush === false) {
        console.log(nb)
        array.push({x: Number(hour), y: nb})
      }
      hour = '';
      nb = 1;
    }
  }
  console.log(array)
  return array
}

export const boarData = [{x: 0, y: 2}];
export const ravenData = parse(raven);

function maxHour () {

  if (Object.keys(ravenData).length < 1) {
    return ('0h')
  }
  var max = ravenData[0].x;
  for (let i = 0; i < Object.keys(ravenData).length; i++) {
    if (ravenData[i].x > max)
      max = ravenData[i].x;
  }
  return (max + 'h');
}

function maxNb() {
  if (Object.keys(ravenData).length < 1) {
    return ('0')
  }
  var max = ravenData[0].y;

  for (let i = 0; i < Object.keys(ravenData).length; i++) {
    if (ravenData[i].y > max)
      max = ravenData[i].y;
  }
  return max + ''
}

export const maxN = maxNb() + ''  
export const maxH = maxHour() + ''
// else {
//   for (let s = 0; s < array.length; s++) {
//         console.log(array.length)
//         // console.log(hour)
//         // console.log(array[s].x)
//         if (array[s].x !== Number(hour))
//           array.push({x: Number(hour), y: nb})
//   }

