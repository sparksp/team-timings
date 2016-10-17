'use strict';

var headers = require('./headers');
var csvWriter = require('csv-write-stream');
var row = require('./row');

module.exports = function teamTimingsCsv(pipe, options) {
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
