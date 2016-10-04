'use strict';

module.exports = function flattenArray(array) {
  return [].concat.apply([], array);
};
