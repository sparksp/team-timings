'use strict';

var pad = require('./pad');

/**
 * Pads the given input with 0's to ensure minimum length of 2.
 * @access private
 * @param {string} input - string to zero pad
 * @return {string} Zero padded string
 */
function zeropad(input) {
  return pad('0', 2, input);
}

/**
 * Floors and zero pads the given number.
 * @access private
 * @param {number} number - number to format
 * @return {string} formatted number
 */
function format(number) {
  return zeropad(Math.floor(number));
}

/**
 * Simple Time Object
 *
 * Converts between number seconds and "hours:minutes:seconds" string.
 */
module.exports = class Time {
  static parse(string) {
    var timeStrings = String(string).split(":");
    var timeSeconds = timeStrings.reduce((seconds, value, index) => {
      return (seconds * 60) + (parseInt(value, 10) || 0);
    }, 0);

    return new Time(timeSeconds);
  }

  /**
   * @constructor
   * @param {number} seconds - number of seconds this Time represents
   */
  constructor(seconds) {
    if (typeof seconds !== "number") {
      seconds = 0;
    }
    this._seconds = seconds;
  }

  /**
   * @return {string} time formatted as "hh:mm:ss"
   */
  toString() {
    var hours = format(this._seconds / 3600);
    var minutes = format((this._seconds / 60) % 60);
    var seconds = format(this._seconds % 60);

    return `${hours}:${minutes}:${seconds}`;
  }

  /**
   * @return {number} seconds
   */
  toInteger() {
    return this._seconds;
  }

  /**
   * @param {number} seconds - time to add to this time
   * @return {Time} new time instance
   */
  add(seconds) {
    return new Time(this._seconds + seconds);
  }

  /**
   * @param {Time} time - time to add to this time
   * @return {Time} new time instance
   */
  addTime(time) {
    return new Time(this._seconds + time.toInteger());
  }
};
