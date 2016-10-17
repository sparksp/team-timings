'use strict';

var Time = require('./time');
var flattenArray = require('./flattenArray');

var orderArray = (reverse, array) => {
  if (!reverse) {
    return array;
  }
  return array.reverse();
};

var teamStartTimeFromIndex = (settings, index) => {
  var startTime = Time.parse(settings.startTime);
  var timeBetweenTeams = Time.parse(settings.timeBetweenTeams);
  var secondsBetweenTeams = timeBetweenTeams.toInteger() || 0;
  return startTime.add(secondsBetweenTeams * index);
};

module.exports = function row(settings, index, direction, reverse) {
  var teamStartTime = teamStartTimeFromIndex(settings, index);
  var journeyTimes = orderArray(reverse, settings.journeyTimes);
  var baseDuration = Time.parse(settings.baseDuration);

  var lastOutTime = teamStartTime;
  var baseTimes = journeyTimes.map(journeyTime => {
    let baseInTime = lastOutTime.addTime(Time.parse(journeyTime));
    lastOutTime = baseInTime.addTime(baseDuration);
    return [baseInTime.toString(), lastOutTime.toString()];
  });

  var finalBaseTimes = baseTimes.pop();
  var teamFinishTime = finalBaseTimes[0];

  var teamNumber = String(index + 1);

  return [
    teamNumber,
    direction,
    teamStartTime.toString()
  ].concat(
    flattenArray(orderArray(reverse, baseTimes)),
    [teamFinishTime]
  );
};
