'use strict';

module.exports = function convertDirections(numberOfDirections) {
  numberOfDirections = parseInt(numberOfDirections, 10);
  var directions = ["CW"];
  if (numberOfDirections === 2) {
    directions.push("ACW");
  }
  return directions;
};
