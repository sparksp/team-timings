'use strict';

const test = require('ava');
const flattenArray = require('./flattenArray');

test('flattenArray', t => {
  var inputArray = [['a', 'b'], ['c', 'd']];
  var expectedArray = ['a', 'b', 'c', 'd'];
  t.deepEqual(flattenArray(inputArray), expectedArray);
});
