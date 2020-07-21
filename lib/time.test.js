'use strict';

const test = require('ava');
const Time = require('./time');

test('default time', t => {
  var time = new Time();
  t.is(time.toInteger(), 0);
  t.is(time.toString(), "00:00:00");
});

test('non-number seconds', t => {
  var time = new Time("not a number");
  t.is(time.toInteger(), 0);
  t.is(time.toString(), "00:00:00");
});

test('toTime', t => {
  var time = new Time(3600);
  t.is(time.toInteger(), 3600);
});

test('toString', t => {
  var time = new Time(3789);
  t.is(time.toString(), "01:03:09");
});

test('toString > 24 hours', t => {
  var time = Time.parse("54:02:03");
  t.is(time.toString(), "54:02:03");
});

test('parse', t => {
  var time = Time.parse("01:02:03");
  t.is(time.toInteger(), 3723);
  t.is(time.toString(), "01:02:03");
});

test('parse null', t => {
  var time = Time.parse(null);
  t.is(time.toInteger(), 0);
});

test('parse undefined', t => {
  var time = Time.parse(undefined);
  t.is(time.toInteger(), 0);
});

test('add', t => {
  var time = new Time(0);
  var newTime = time.add(1);
  t.is(newTime.toInteger(), 1);
});

test('addTime', t => {
  var timeA = new Time(1);
  var timeB = new Time(2);
  var newTime = timeA.addTime(timeB);
  t.is(newTime.toInteger(), 3);
});
