'use strict'

/**
 * Module variables
 * @private
 */

const mod_arrays_hashing = require('../src/lib/arrays-hashing.js')

describe('Arrays & Hashing', () => {
  describe('Contain Duplicates, time complexity: O(n) + space complexity: O(n). A trade-off would be to sort the array in the first place to avoid any extra space. But time complexity would increment to O(n log n). ', () => {
    it('should return true, [1, 2, 3, 1]', () => {
      expect(mod_arrays_hashing.containDuplicates([1,2,3,1])).toBe(true)      
    })
    it('should return false, [1, 2, 3, 4]', () => {
      expect(mod_arrays_hashing.containDuplicates([1,2,3,4])).toBe(false)      
    })
  })
})
