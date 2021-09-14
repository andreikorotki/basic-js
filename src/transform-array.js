import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (Array.isArray(arr)) { 
    if (arr == []){
      return [];
    }
    let res = [];
    let discarded = false;
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element === '--double-prev' && index !== 0 && !discarded) {
        res.push(arr[index - 1]);
      }
      else if (element === '--discard-prev' && index !== 0 && !discarded) {
        res.pop();
        
      }
      else if (element === '--discard-next' && index !== arr.length - 1) {
        index++;
        discarded = true;
      }
      else if (element === '--double-next'  && index !== arr.length - 1 ) {
        res.push(arr[index + 1]);
      }
      else if (element !== '--double-next' && element !== '--discard-next' && element !== '--discard-prev' && element !== '--double-prev') {
        res.push(element);
      }
    
      
    }
    return res;
  }
  else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}


console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));