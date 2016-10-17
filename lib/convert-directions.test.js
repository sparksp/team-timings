'use strict';

import test from 'ava';
import convertDirections from './convert-directions';

test('1 direction', t => {
  var directions = convertDirections(1);
  t.deepEqual(directions, ['CW']);
});

test('2 directions', t => {
  var directions = convertDirections(2);
  t.deepEqual(directions, ['CW', 'ACW']);
});

test('accepts string numbers', t => {
  var directions = convertDirections('2');
  t.deepEqual(directions, ['CW', 'ACW']);
});

test('no directions', t => {
  var directions = convertDirections();
  t.deepEqual(directions, ['CW']);
});
