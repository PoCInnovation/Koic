import moment from 'moment'

function parseIntruder(intruder) {
  const result = Array(24).fill(0)
  
  for (const elem of intruder.detections) {
    if (elem.detected_at.substring(0, 10) === moment().format("YYYY-MM-DD")) {
      result[parseInt(elem.detected_at.substring(11, 13))] += 1
    }
  }
  return (result)
}

export default parseIntruder