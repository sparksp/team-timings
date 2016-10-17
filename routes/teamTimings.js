'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var csvWriter = require('csv-write-stream');
var headers = require('../lib/headers');
var row = require('../lib/row');
var toArray = require('../lib/to-array');

var urlencodedParser = bodyParser.urlencoded({extended: false});
var router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('teamTimings/settings.html', {
    root: __dirname
  });
});

var teamTimingsCsv = function(pipe, options) {
  var writer = csvWriter({
    headers: headers(options)
  });
  writer.pipe(pipe);

  for (let i = 0; i < options.teamCount; i++) {
    let direction = options.directions[i % options.directions.length];
    writer.write(row(options, i, direction, direction === "ACW"));
  }

  writer.end();
};

var convertDirections = function(numberOfDirections) {
  numberOfDirections = parseInt(numberOfDirections, 10) || 1;
  var directions = ["CW"];
  if (numberOfDirections === 2) {
    directions.push("ACW");
  }
  return directions;
};

var mapOptions = function(data) {
  return {
    startTime: data.startTime || "08:00:00",
    timeBetweenTeams: data.timeBetweenTeams,
    directions: convertDirections(data.directions),
    teamCount: parseInt(data.teamCount, 10) || 1,
    baseDuration: data.baseDuration,
    journeyTimes: data.journeyTimes ? toArray(data.journeyTimes) : ["00:00"],
    baseLabels: toArray(data.baseLabels)
  };
};

router.post('/', urlencodedParser, (req, res) => {
  var options = mapOptions(req.body);
  res.attachment('team-timings.csv');
  teamTimingsCsv(res, options);
});

module.exports = router;
