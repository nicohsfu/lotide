// old test code's before transforming it to mocha's functions

// const head = require('../head');
// const assertEqual = require('../assertEqual');

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// --------

// the test codes below are using mocha's functions, ie. mocha's "standard formatting"

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

});
