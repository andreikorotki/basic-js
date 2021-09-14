import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
      let res = [];
      let filtred = arr.filter(x => x > 0);
      let sorted = filtred.sort(function(a, b) {return b - a; });
      for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        if (element < 0) {
          res.push(element);
        }
        else {
          res.push(sorted.pop());
        }
      }
      return res;
 
}

// let arr = [-1, 150, 190, 170, -1, -1, 160, 180];
// console.log(sortByHeight(arr));
