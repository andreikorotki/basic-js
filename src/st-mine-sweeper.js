import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  
  let sol = matrix.map((r) => r.map((x) => 0));
  let adj = ([i, j]) => [[i - 1, j - 1],[i - 1, j],
                         [i - 1, j + 1],[i, j - 1],
                         [i, j + 1],[i + 1, j - 1],
                         [i + 1, j],[i + 1, j + 1],];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        let tmp = adj([i, j]);
        for (let z = 0; z < 8; z++) {
          if ( tmp[z][0] >= 0 && tmp[z][1] >= 0 &&
            tmp[z][0] < matrix.length && tmp[z][1] < matrix[i].length) {
            sol[tmp[z][0]][tmp[z][1]]++;
          }
        }
      }
    }
  }
  return sol;
}
