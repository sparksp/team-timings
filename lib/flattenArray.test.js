'use strict';

import test from 'ava';
import flattenArray from './flattenArray';

test('flattenArray', t => {
  var inputArray = [['a', 'b'], ['c', 'd']];
  var expectedArray = ['a', 'b', 'c', 'd'];
  t.deepEqual(flattenArray(inputArray), expectedArray);
});
