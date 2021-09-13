import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let firstRowSum = matrix[0].reduce(function(acc, val) { return acc + val; }, 0);
  if (matrix.length > 1) {
    for (let i = 1; i < matrix.length; i++) {
      const element = matrix[i];
      for (let j = 0; j < element.length; j++) {
        if (matrix[i - 1][j] !== 0) {
          firstRowSum = firstRowSum + matrix[i][j];
        }
        
      }
    }
    return firstRowSum;
  }
  else {
    return firstRowSum;
  }
}
