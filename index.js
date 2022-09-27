// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./middle');
const assertEqual = require('./middle');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');



module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without,
};


// prior to shorthanding it:
// module.exports = {
//   head: head,
//   tail: tail,
//   middle: middle,
//   assertArraysEqual: assertArraysEqual,
//   assertEqual: assertEqual,
//   assertObjectsEqual: assertObjectsEqual,
//   countLetters: countLetters,
//   countOnly: countOnly,
//   eqObjects: eqObjects,
//   findKey: findKey,
//   findKeyByValue: findKeyByValue,
//   letterPositions: letterPositions,
//   map: map,
//   takeUntil: takeUntil,
//   without: without,
// };