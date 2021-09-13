import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 * 12518
 */
export default function deleteDigit(n) {
  if (n !== undefined) {
    let arr = n.toString().split('');
  
    let numbers = [];
    for (let index = 0; index < arr.length; index++) {
      let tmp = arr.slice();
      tmp.splice(index, 1);
     
      numbers.push(parseInt(tmp.join(''), 10));
    }
    return Math.max(...numbers);
  }
}

//console.log(deleteDigit(12518));