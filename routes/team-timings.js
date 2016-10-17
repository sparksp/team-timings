'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mapOptions = require('../lib/map-options');
var teamTimingsCsv = require('../lib/team-timings-csv');

var urlencodedParser = bodyParser.urlencoded({extended: false});
var router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('team-timings/settings.html', {
    root: __dirname
  });
});

router.post('/', urlencodedParser, (req, res) => {
  var options = mapOptions(req.body);
  res.attachment('team-timings.csv');
  teamTimingsCsv(res, options);
});

module.exports = router;
