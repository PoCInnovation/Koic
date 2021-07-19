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
  var hour = ''
  var len = Object.keys(props.detections).length
  for (let i = 0; i < len; i++) {
    var test = props.detections[i].detected_at;
    if (test.includes(date)) {
      for (let j = 0; j < test.length; j++)
        if (j > 10 && j < 19) {
          hour = hour + test[j]
        }
      }
      array.push({date: 1, nb: hour})
    hour = '';
  }
  return array
}

export const boarData = parse(raven);
export const ravenData = parse(raven);