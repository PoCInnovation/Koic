import moment from 'moment'

function parseIntruder(intruder, date) {
  let array = new Array
  let nb = 1;
  let hour = ''
  let len = Object.keys(intruder.detections).length
  let add = '';
  let notpush = false

  if (len < 1) {
    array.push({x: 0, y: 0})
    return array
  }
  for (let i = 0; i < len; i++) {
    let test = intruder.detections[i].detected_at;
    if (test.includes(moment().format("yyyy-mm-dd"))) {
      for (let j = 0; j < test.length; j++) {
        if (j > 10 && j < 13) {
          hour = hour + test[j]
          for (let a = i; a < len; a++) {
            for (let b = 0; b < intruder.detections[a].detected_at.length; b++)
              if (b > 10 && b < 13) {
                add = add +  intruder.detections[i].detected_at[b];
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

export default parseIntruder