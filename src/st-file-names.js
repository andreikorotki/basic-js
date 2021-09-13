import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let output = [];
  let objCounter = {};
  for (let index = 0; index < names.length; index++) {
    let element = names[index];
    if (objCounter[element] === undefined) {
      objCounter[element] = 0;
    }
    else {
      let counter = objCounter[element];
      objCounter[element] = ++counter;
    }
    if (output.includes(element)) {
      //rename 
        let suf = objCounter[element];
        if (suf === 0) {
          suf = 1;
        }
        element = element + '(' + (suf).toString() + ')';
    }
    output.push(element);
  
  }
  return output;
}


//console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));