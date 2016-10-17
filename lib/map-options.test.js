'use strict';

import test from 'ava';
import mapOptions from './map-options';

test('without start time', t => {
  var mappedOptions = mapOptions({});
  t.is(mappedOptions.startTime, "08:00:00");
});

test('with start time', t => {
  var startTime = 'a start time';
  var mappedOptions = mapOptions({startTime});
  t.is(mappedOptions.startTime, startTime);
});

test('with time between teams', t => {
  var timeBetweenTeams = 'a duration';
  var mappedOptions = mapOptions({timeBetweenTeams});
  t.is(mappedOptions.timeBetweenTeams, timeBetweenTeams);
});

test('with base duration', t => {
  var baseDuration = 'a duration';
  var mappedOptions = mapOptions({baseDuration});
  t.is(mappedOptions.baseDuration, baseDuration);
});

test('without journey times', t => {
  var mappedOptions = mapOptions({});
  t.deepEqual(mappedOptions.journeyTimes, ["00:00"]);
});

test('with many journey times', t => {
  var journeyTimes = ['09:00', '10:00'];
  var mappedOptions = mapOptions({journeyTimes});
  t.is(mappedOptions.journeyTimes, journeyTimes);
});

test('with 1 journey time', t => {
  var journeyTimes = '09:00';
  var mappedOptions = mapOptions({journeyTimes});
  t.deepEqual(mappedOptions.journeyTimes, [journeyTimes]);
});

test('without base labels', t => {
  var mappedOptions = mapOptions({});
  t.deepEqual(mappedOptions.baseLabels, []);
});

test('with many base labels', t => {
  var baseLabels = ['a', 'b'];
  var mappedOptions = mapOptions({baseLabels});
  t.is(mappedOptions.baseLabels, baseLabels);
});

test('with 1 base label', t => {
  var baseLabels = 'a single base label';
  var mappedOptions = mapOptions({baseLabels});
  t.deepEqual(mappedOptions.baseLabels, [baseLabels]);
});

test('without a team count', t => {
  var mappedOptions = mapOptions({});
  t.is(mappedOptions.teamCount, 1);
});

test('with a team count', t => {
  var teamCount = 20;
  var mappedOptions = mapOptions({teamCount});
  t.is(mappedOptions.teamCount, teamCount);
});

test('with a string team count', t => {
  var teamCount = '12';
  var mappedOptions = mapOptions({teamCount});
  t.is(mappedOptions.teamCount, 12);
});

test('with 1 direction', t => {
  var mappedOptions = mapOptions({directions: 1});
  t.deepEqual(mappedOptions.directions, ["CW"]);
});

test('with 2 directions', t => {
  var mappedOptions = mapOptions({directions: 2});
  t.deepEqual(mappedOptions.directions, ["CW", "ACW"]);
});
