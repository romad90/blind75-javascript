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
 * Valid Anagram
 * Time complexity: O(n log n)
 * Space complexity: O(1) (not considering sort() algorithm memory occupation in the equation)
 *
 */
const isAnagram = function (s, t) {
    mod_assert.ok(s, 's cannot be null!')
    mod_assert.ok(t, 't cannot be null!')
    mod_assert.ok(typeof s === 'string', 's must be a string')
    mod_assert.ok(typeof t === 'string', 't must be a string')

    if (s.length !== t.length) return false
    
    return s.split('').sort().join('') === t.split('').sort().join('')
}

/**
 * Module exports
 * @public
 */
module.exports = {
  containDuplicates,
  isAnagram
}
