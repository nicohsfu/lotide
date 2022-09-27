const eqObjects = require('../eqObjects');
const eqArrays = require('../eqArrays');

// tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log("test", eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log("test", eqObjects(ab, abc)); // => false

// tests with array
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log("test", eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log("test", eqObjects(cd, cd2)); // => false


console.log("eqArrays: ", eqArrays(["2", 3], ["2", 3, 4]));