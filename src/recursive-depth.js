import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calc = 0;
  deapest = 0;
  calculateDepth(arr, originalArray = undefined) {
   if (originalArray === undefined) {
    this.deapest = 0; 
    this.calc = 0;
  }
   if (Array.isArray(arr)) {
    
    this.calc++;
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        if (Array.isArray(element)) {
          this.calculateDepth(element, arr); 
        }
    }
    if (this.calc > this.deapest) {
    this.deapest = this.calc;
   }
    this.calc--;
   } 
   return this.deapest;
  }
}
