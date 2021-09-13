import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let additionChank = '';
  if (options.addition !== undefined) {
  let addition = options.addition;
  let additionSep = '|';
  if (options.additionSeparator !== undefined) {
    additionSep = options.additionSeparator;
  }
  let additionRepeatTimes = options.additionRepeatTimes;
  
  if (additionRepeatTimes > 1) {
    additionChank =  (addition + additionSep).repeat(additionRepeatTimes - 1) + addition;
  }
  else {
    additionChank  = addition;
  }
}
  let sep = '+';
  if  (options.separator !== undefined) {
    sep = options.separator ;
  }
  let repString = '';
  if (options.repeatTimes > 1) {
    repString = (str + additionChank + sep).repeat(options.repeatTimes - 1) + (str + additionChank);
    
  }
  else {
    repString = str + additionChank;
  }
return repString;


}

//console.log(repeater('la', { repeatTimes: 3 }));