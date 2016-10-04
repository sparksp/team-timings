'use strict';

var flattenArray = require('./flattenArray');

module.exports = function headers(settings) {
  let firstHeaders = ["Team", "Dir", "HQ Out"];
  let waypointHeaders = flattenArray(settings.baseLabels.map(label => {
    return [`${label} In`, `${label} Out`];
  }));

  return firstHeaders.concat(waypointHeaders, ["HQ In"]);
};
