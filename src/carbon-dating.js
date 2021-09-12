import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
//Math.log2()
const parsed = parseFloat(sampleActivity);
if (typeof sampleActivity !== 'string') { return false; }
else if (isNaN(parsed)) { return false; }
else if (parsed < 1 || parsed > 15) { return false; } 
else {
  return Math.ceil(Math.log(MODERN_ACTIVITY/parsed) / (0.693/HALF_LIFE_PERIOD));
}
}