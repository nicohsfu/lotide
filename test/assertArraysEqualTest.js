const assertArraysEqual = require('../assertArraysEqual');

//tests
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); //true
console.log(assertArraysEqual([1, 2, 3], [1, 2, "3"])); //false