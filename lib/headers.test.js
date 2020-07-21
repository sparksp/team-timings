'use strict';

const test = require('ava');
const headers = require('./headers');

test('headers', t => {
  var settings = {
    baseLabels: ["WP1", "WP2"]
  };
  var result = headers(settings);
  var expected = [
    "Team", "Dir", "HQ Out", "WP1 In", "WP1 Out", "WP2 In", "WP2 Out", "HQ In"
  ];
  t.deepEqual(result, expected);
});
