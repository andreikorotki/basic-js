import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let array = n.toString().split('');
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum = sum + parseInt(element, 10);
  }
  if (sum > 9) {
    sum = getSumOfDigits(sum);
  } 
  return sum;
}

//console.log(getSumOfDigits(91));