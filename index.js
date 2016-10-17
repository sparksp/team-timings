'use strict';

var fs = require('fs');
var settings = require('./settings');
var teamTimingsCsv = require('./lib/team-timings-csv');

teamTimingsCsv(fs.createWriteStream(settings.filename), settings);
