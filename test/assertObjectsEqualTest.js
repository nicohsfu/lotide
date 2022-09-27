const assertObjectsEqual = require('../assertObjectsEqual');

// test objects
let obj1 = {
  a: "apple",
  b: 23,
  c: "cavendish"
};

let obj2 = {
  a: "apple",
  b: 23,
  c: "cavendish",
};

let obj3 = {
  a: "apple",
  b: "banana",
  c: [1, 2, 3],
};

let obj4 = {
  a: "apple",
  b: "banana",
  c: [3, 2, 1],
};

assertObjectsEqual(obj1, obj2); // should PASS assertion
assertObjectsEqual(obj2, obj3); // should FAIL assertion since the B an C keys contain different values for each object
assertObjectsEqual(obj3, obj4); // should FAIL assertion since the C keys contain different values for each object