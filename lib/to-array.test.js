'use strict';

const test = require('ava');
const toArray = require('./to-array');

test('undefined', t => {
  t.deepEqual(toArray(), []);
});

test('null', t => {
  t.deepEqual(toArray(null), []);
});

test('array', t => {
  var array = ['a', 'r', 'r', 'a', 'y'];
  t.is(toArray(array), array);
});

test('string', t => {
  var string = 'any string';
  t.deepEqual(toArray(string), [string]);
});
