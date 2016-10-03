'use strict';

/**
 * @access private
 * @param {string} char - character to repeat
 * @param {number} length - minimum length of string
 * @param {string} input - string to pad
 * @return {string} Padded string
 */
module.exports = function pad(char, length, input) {
  if (String(input).length >= length) {
    return input;
  }
  return (String(char).repeat(length) + input).slice(-length);
};
