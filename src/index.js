module.exports = function check(str, bracketsConfig) {
    // your solution
    const strToCheck = str;
    const bracketsConfigArr = [];
    let bool = false;
    for (let i = 0; i < bracketsConfig.length; i++) {
        bracketsConfigArr.push(bracketsConfig[i].join(''));
    }

    for (let i = 0; i < bracketsConfigArr.length; i++) {
        for (let j = 0; j < str.length; j++) {
            str = str.split(bracketsConfigArr[i]).join('');
        }
    }
    if (str.length === 0) return true;
    if (strToCheck === str) return false;
    return check(str, bracketsConfig);
}
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
