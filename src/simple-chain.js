import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */

let chainMaker = {
  chain: '',
  getLength() {
    return this.chain.split('~~').length;
  },
  addLink(value) {
    if (value === null)  {
      value = 'null';
    }
    if (this.chain === '') {
      this.chain = '( ' + value.toString() + ' )';
    }
    else {
      this.chain = this.chain + '~~( ' + value.toString() + ' )';
    }
    return this;
  },
  removeLink(position) {
    let arr = this.chain.split('~~');
    if ((typeof position === 'string')) {
      this.chain = '';
      throw new Error ("You can't remove incorrect link!");
    }
    else if (position <= 0 || position > arr.length) {
      this.chain = '';
      throw new Error ("You can't remove incorrect link!");
    }
    else {
      arr.splice(position - 1, 1);
      this.chain = arr.join('~~');
      return this;
    }
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse( ).join('~~');
    return this;
  },
  finishChain() {
    let res = this.chain;
    this.chain = '';
    return res;
  }
};

export default chainMaker;
