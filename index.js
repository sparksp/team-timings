'use strict';

var fs = require('fs');
var csvWriter = require('csv-write-stream');
var headers = require('./lib/headers');
var row = require('./lib/row');
var settings = require('./settings');

var writer = csvWriter({
  headers: headers(settings)
});
writer.pipe(fs.createWriteStream(settings.filename));

for (let i = 0; i < settings.teamCount; i++) {
  let direction = settings.directions[i % settings.directions.length];
  writer.write(row(settings, i, direction, direction === "ACW"));
}

writer.end();
