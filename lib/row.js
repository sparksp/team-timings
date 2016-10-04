'use strict';

var Time = require('./Time');
var flattenArray = require('./flattenArray');

module.exports = function row(settings, index, direction, reverse) {
  var orderArray = array => {
    if (!reverse) {
      return array;
    }
    return array.reverse();
  };

  var timeBetweenTeams = Time.parse(settings.timeBetweenTeams);
  var startTime = Time.parse(settings.startTime);
  var teamStartTime = startTime.add(timeBetweenTeams.toInteger() * index);
  var baseDuration = Time.parse(settings.baseDuration);
  var journeyTimes = orderArray(settings.journeyTimes);

  var lastOutTime = teamStartTime;
  var baseTimes = journeyTimes.map(journeyTime => {
    let baseInTime = lastOutTime.addTime(Time.parse(journeyTime));
    lastOutTime = baseInTime.addTime(baseDuration);
    return [baseInTime.toString(), lastOutTime.toString()];
  });

  var finalBaseTimes = baseTimes.pop();
  var teamFinishTime = finalBaseTimes[0];

  var teamNumber = index + 1;

  return [
    String(teamNumber),
    direction,
    teamStartTime.toString()
  ].concat(
    flattenArray(orderArray(baseTimes)),
    [teamFinishTime]
  );
};
