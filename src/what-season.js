import { expect } from 'chai';
import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (date instanceof Date) {
    let month = '';
    try { 
      let hours = date.getUTCHours();

    }
    catch (err) {
      throw new Error("Invalid date!");
    }
    try {
    month = date.getMonth();
      }
    catch (err) {
      throw new Error("Invalid date!");
    }
    let season = '';
    if ([0, 1, 11].includes(month)) {
      season = 'winter';
    } 
    else if ([2, 3, 4].includes(month)) {
      season = 'spring';
    } 
    else if ([5, 6, 7].includes(month)) {
      season = 'summer';
    } 
    else if ([8, 9, 10].includes(month)) {
      season = 'autumn';
    } 
    return season;
   
  }
  else {
    throw new Error("Invalid date!");
  }

}
