// import raven from './raven.json'
// import boar from './boar.json'
let raven = [];
(async () => {
  const res = await fetch('http://192.168.0.43:5000/api/animals/raven');
  raven = await res.json();
})();

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

// function parse (props) {
  
//   let array = new Array
//   let nb = 1;
//   let hour = ''
//   let len = Object.keys(props).length
//   let add = '';

//   for (let i = 0; i < len; i++) {
//     let test = props[i].detected_at;
//     if (test.includes(date)) {
//       for (let j = 0; j < test.length; j++) {
//         if (j > 10 && j < 13) {
//           hour = hour + test[j]
//           // console.log(hour)
//           // console.log(test)
//           for (let a = i; a < len; a++) {
//             for (let b = 0; b < props[a].detected_at.length; b++)
//               if (b > 10 && b < 13) {
//                 add = add +  props[i].detected_at[b];
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

function parse(detection) {
  let array = [];
  let nb = 1;
  let hour = '';
  console.log(detection);
  const len = Object.keys(detection).length;
  let add = '';
  let notPush = false;

  console.log(raven);
  if (len === 0) {
    array.push({x: 0, y: 0});
    return array;
  }
  for (let i = 0; i < len; i++) {
    let test = detection[i]['detected_at'];

    if (test.includes(date)) {
      for (let j = 0; j < test.length; j++) {
        if (j > 10 && j < 13) {
          hour = hour + test[j];
          for (let a = i; a < len; a++) {
            for (let b = 0; b < detection[a]['detected_at'].length; b++)
              if (b > 10 && b < 13) {
                add = add +  detection[i]['detected_at'][b];
              }
            }
            for (let i = 0; i < Object.keys(array).length; i++) {
              let isMany = array[i].x;

              if (isMany === Number(hour)) {
                array[i].y += 1;
                notPush = true;
              }
            }
            add = '';
        }
      }
      if (notPush === false) {
        console.log(nb);
        array.push({x: Number(hour), y: nb});
      }
      hour = '';
      nb = 1;
    }
  }
  console.log(array);
  return array;
}

export const boarData = [{x: 0, y: 2}];
export const ravenData = parse(raven);

function maxHour() {
  if (Object.keys(ravenData).length < 1) {
    return ('0h')
  }
  let max = ravenData[0].x;
  for (let i = 0; i < Object.keys(ravenData).length; i++) {
    if (ravenData[i].x > max)
      max = ravenData[i].x;
  }
  return (max + 'h');
}

function maxNb() {
  if (Object.keys(ravenData).length < 1) {
    return '0';
  }
  let max = ravenData[0].y;

  for (let i = 0; i < Object.keys(ravenData).length; i++) {
    if (ravenData[i].y > max)
      max = ravenData[i].y;
  }
  return max + '';
}

export const maxN = maxNb() + '';
export const maxH = maxHour() + '';
// else {
//   for (let s = 0; s < array.length; s++) {
//         console.log(array.length)
//         // console.log(hour)
//         // console.log(array[s].x)
//         if (array[s].x !== Number(hour))
//           array.push({x: Number(hour), y: nb})
//   }

