import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(isDirect) {
    if (isDirect === undefined) {
      this.isDirect = true;
    }
    else {
      this.isDirect = isDirect;
    }
  }

  prepareKey(str, keyWord)
  {
      keyWord = keyWord.toUpperCase().split("");
      let key = [];
      str = str.toUpperCase();
        let tmp = keyWord.length;  
        let j = 0; 
        for (let i = 0; i < (str.length); i++)
        {
          
          if(str[i].charCodeAt(0) > 64 && str[i].charCodeAt(0) < 91) {
            if (j < tmp) {
              key.push(keyWord[j]);
            }
            else {
              key.push(keyWord[j % tmp]);
            }
            j++;
          }
          else {
            key.push(' ');
          }
        }
      
      return key.join("");
  }

  getShift(key, i) {
     let shift = key[i % key.length].charCodeAt(0) - 65;
    return shift;
  }

  encrypt(str, keyword) {
    if (str === undefined || keyword === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let encriptedText="";
    str = str.toUpperCase();
    let key = this.prepareKey(str, keyword);
    for (let i = 0; i < str.length; i++)
    {
        if(str[i].charCodeAt(0) > 64 && str[i].charCodeAt(0) < 91) {
        let x = str[i].charCodeAt(0) + this.getShift(key, i);
        if (x > 90) {
          x = x - 26;
        }
        encriptedText += String.fromCharCode(x);
      }
      else {
        encriptedText += str[i];
      }
        
    }
    if (!this.isDirect) {
      encriptedText = encriptedText.split('').reverse().join('');
    }
    return encriptedText;
  }
  decrypt(str, keyword) {
    if (str === undefined || keyword === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let originalText="";
    str = str.toUpperCase();
    let key = this.prepareKey(str,keyword);
    for (let i = 0; i < str.length; i++) {
      if(str[i].charCodeAt(0) > 64 && str[i].charCodeAt(0) < 91) {
        let x = str[i].charCodeAt(0) - this.getShift(key, i);
        if (x < 65) {
          x = x + 26;
        }
        originalText += String.fromCharCode(x);
      }
      else {
        originalText += str[i];
      }
    }
    if (!this.isDirect) {
      originalText = originalText.split('').reverse().join('');
    }
    return originalText;
  }
}


// let chiper = new VigenereCipheringMachine(false);
// console.log(chiper.encrypt('attack at dawn!', 'alphonse'));
// console.log(chiper.decrypt('AEIHQX SX DLLU!', 'alphonse'));
//console.log(chiper.prepareKey('attack at dawn!', 'alphonse'));
//console.log(' '.charCodeAt(0));