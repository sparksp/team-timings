'use strict';

const test = require('ava');
const row = require('./row');

test('row', t => {
  var settings = {
    baseDuration: "00:20:00",
    journeyTimes: ["00:01:00", "00:02:00", "00:03:00"],
    startTime: "08:00:00",
    timeBetweenTeams: "00:10:00"
  };
  var expected = [
    ["1", "CW", "08:00:00", "08:01:00", "08:21:00", "08:23:00", "08:43:00", "08:46:00"],
    ["2", "ACW", "08:10:00", "08:35:00", "08:55:00", "08:13:00", "08:33:00", "08:56:00"]
  ];
  t.deepEqual(row(settings, 0, "CW", false), expected[0]);
  t.deepEqual(row(settings, 1, "ACW", true), expected[1]);
});

test('no time between teams', t => {
  var settings = {
    baseDuration: "00:20:00",
    journeyTimes: ["00:01:00", "00:02:00", "00:03:00"],
    startTime: "08:00:00"
  };
  var expected = [
    ["1", "CW", "08:00:00", "08:01:00", "08:21:00", "08:23:00", "08:43:00", "08:46:00"],
    ["2", "ACW", "08:00:00", "08:25:00", "08:45:00", "08:03:00", "08:23:00", "08:46:00"]
  ];
  t.deepEqual(row(settings, 0, "CW", false), expected[0]);
  t.deepEqual(row(settings, 1, "ACW", true), expected[1]);
});
