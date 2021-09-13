import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let count = 0;
  if (s1 !== undefined && s2 !== undefined) {
    let a1 = s1.split('');
    let a2 = s2.split('');

    let res = a1.filter(function(n) { return a2.indexOf(n) !== -1;});
    for (let index = 0; index < a1.length; index++) {
      const e1 = a1[index];
      for (let j = 0; j < a2.length; j++) {
        const e2 = a2[j];
        if (e1 === e2) {
          count++;
          a2.splice(j, 1);
          break;
        } 
      } 
    }
  }
  
  return count;
}

//console.log(getCommonCharacterCount("aabcc", "adcaa"));