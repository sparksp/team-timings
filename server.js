'use strict';

var express = require('express');
var teamTimings = require('./routes/team-timings');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'));
app.use('/', teamTimings);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
