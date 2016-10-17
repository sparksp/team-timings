'use strict';

/**
 * Returns an array.  If the given value is already an array it is returned
 * directly.  If no value is given, or the value is null, then an empty array is
 * returned.  Otherwise the value is returned wrapped in an array.
 * @param {Object} value - Any value
 * @return {array} An array
 */
module.exports = function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (value === undefined || value === null) {
    return [];
  }
  return [value];
};
