'use strict';

var express = require('express');
var teamTimings = require('./routes/teamTimings');

var app = express();
app.use('/', teamTimings);

app.listen(3000, () => {
  console.info('Team Timings listening on port 3000');
});
