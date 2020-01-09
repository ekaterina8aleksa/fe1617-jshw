'use strict';

class StringBuilder {
  constructor(str) {
    this._value = str;

  }
  get value() {
    return this._value;
  }
  set value(newStr){
this._value = newStr;
  }

  append(addstr) {
    const endStr = this._value.concat(addstr);
    this.value = endStr;
   return this.value;
  }
  prepend(addstr) {
    const startStr = addstr.concat(this.value);
    this.value = startStr;
    return this.value;
  }
  pad(addstr) {
    const fullStr  = addstr.concat(this.value, addstr);
    this.value = fullStr;
    return this.value;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
