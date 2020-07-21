'use strict';

const test = require('ava');
const  pad = require('./pad');

test('char is empty', t => {
  t.is(pad("", 5, "abc"), "abc");
});

test('char is not a string', t => {
  t.is(pad(1, 5, "abc"), "11abc");
});

test('length = 0', t => {
  t.is(pad(" ", 0, ""), "");
  t.is(pad(" ", 0, "abc"), "abc");
});

test('input is not a string', t => {
  t.is(pad(0, 5, 23), "00023");
});

test('input is longer than length', t => {
  var input = "abc";
  t.is(pad(" ", 1, input), input);
});
