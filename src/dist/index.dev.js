"use strict";

module.exports = function check(str, bracketsConfig) {
  // your solution
  var strToCheck = str;
  var bracketsConfigArr = [];
  var bool = false;

  for (var i = 0; i < bracketsConfig.length; i++) {
    bracketsConfigArr.push(bracketsConfig[i].join(''));
  }

  for (var _i = 0; _i < bracketsConfigArr.length; _i++) {
    for (var j = 0; j < str.length; j++) {
      str = str.split(bracketsConfigArr[_i]).join('');
    }
  }

  if (str.length === 0) return true;
  if (strToCheck === str) return false;
  return check(str, bracketsConfig);
};
/*
const config1 = [
    ['(', ')']
];
const config2 = [
    ['(', ')'],
    ['[', ']']
];
const config3 = [
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
];
console.log(module.exports('()', config1)); //true
console.log(module.exports('[]][[]', config2)); //false
console.log(module.exports('((()))()', config1)); //true
console.log(module.exports('())(', config1)); //false
console.log(module.exports('([{}])', config3)); // true;
*/