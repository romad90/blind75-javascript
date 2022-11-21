'use strict'

const mod_assert = require('assert').strict

/**
 * Contains duplicate
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * @param  Array[{Number}]   arrNumbers  Array of numbers
 * @return {Bool}            Return true if there is at least one characters appearing twice
 */

const containDuplicates = function (arrNumbers) {
  mod_assert.ok(Array.isArray(arrNumbers), 'arrNumbers must be an array')

  const hashMap = {}
  for (let i = 0; i < arrNumbers.length; i++) {
    const number = arrNumbers[i]
    if (hashMap.hasOwnProperty(number)) {
      return true
    } else {
      hashMap[number] = 1
    }
  }
  return false
}

/**
 * Module exports
 * @public
 */
module.exports = {
  containDuplicates
}
