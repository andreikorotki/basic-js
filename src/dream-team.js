import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
let letterList = [];
  if (! Array.isArray(members)) {return false;}
  for (let index = 0; index < members.length; index++) {
    let element = members[index];
    if (typeof element === 'string') {
      element = element.trim();
      letterList.push(element[0].toUpperCase())
    }
  }

  return letterList.sort(function(a, b) {
    var la = a.toLowerCase(), 
    lb = b.toLowerCase();
    return la > lb ? 1 : la < lb ? -1 : 0;
  }).join('');
}

//console.log(typeof ['Matt', 'Ann', 'Dmitry', 'Max']);
