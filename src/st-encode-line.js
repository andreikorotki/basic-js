import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
let array = str.split('');
let counter = 1;
let resStr = '';
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (index + 1 < array.length) {
    if (element === array[index + 1]) {
      counter++;
    }
    else {
      if (counter === 1) {
        resStr = resStr + element;
      }
      else {
        resStr = resStr + counter.toString() + element;
      }
      counter = 1;
    }
  }
  else {
    if (counter === 1) {
      resStr = resStr + element;
    }
    else {
      resStr = resStr + counter.toString() + element;
    }
    counter = 1;
  }
}
return resStr;
}

//console.log(encodeLine('aabbbc'));