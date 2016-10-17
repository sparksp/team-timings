'use strict';

var convertDirections = require('./convert-directions');
var toArray = require('./to-array');

module.exports = function mapOptions(data) {
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
