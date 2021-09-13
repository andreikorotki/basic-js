import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let resObject = {};

  for (let index = 0; index < domains.length; index++) {
    const element = domains[index];
    let firstLevelReversed = '.' + element.split('.').reverse()[0];
    let secondLevelReversed =  '.' + element.split('.').reverse()[0] + '.'+ element.split('.').reverse()[1];
    if (element.split('.').reverse().length > 2) {
    let reversed = '.' + element.split('.').reverse().join('.');
    resObject[reversed] = 1;
    }
    if (resObject[firstLevelReversed] === undefined) {
      resObject[firstLevelReversed] = 1;
    }
    else {
      let curFrtsVal =  resObject[firstLevelReversed];
      resObject[firstLevelReversed] = ++curFrtsVal;
    }
    if (resObject[secondLevelReversed] === undefined) {
      resObject[secondLevelReversed] = 1;
    }
    else {
      let curScndVal =  resObject[secondLevelReversed];
      resObject[secondLevelReversed] = ++curScndVal;
    }
    
  }

  return  resObject;
}


// let domains = [
//  'code.yandex.ru',
//  'music.yandex.ru',
//  'yandex.ru']
// console.log(getDNSStats(domains));
