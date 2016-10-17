'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var toArray = require('../lib/to-array');
var teamTimingsCsv = require('../lib/team-timings-csv');
var convertDirections = require('../lib/convert-directions');

var urlencodedParser = bodyParser.urlencoded({extended: false});
var router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('teamTimings/settings.html', {
    root: __dirname
  });
});

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
