'use strict'

/**
 * Module variables
 * @private
 */

const mod_arrays_hashing = require('../src/lib/arrays-hashing.js')

describe('Arrays & Hashing', () => {
  describe('217 - Contain Duplicates, time complexity: O(n) + space complexity: O(n). A trade-off would be to sort the array in the first place to avoid any extra space. But time complexity would increment to O(n log n). ', () => {
    it('should return true, [1, 2, 3, 1]', () => {
      expect(mod_arrays_hashing.containDuplicates([1,2,3,1])).toBe(true)      
    })
    it('should return false, [1, 2, 3, 4]', () => {
      expect(mod_arrays_hashing.containDuplicates([1,2,3,4])).toBe(false)      
    })
  })

  describe('242 - Valid Anagram, time complexity: O(n log n) + space complexity: O(1). If space complexity is not an issue, we could go faster O(n) using two hashmaps for counting each characters and then loop on the hashmap to check if the count is the same on both. Space complexity becoming O(n)', () => {
    it('should return true, anagram = nagaram', () => {
        expect(mod_arrays_hashing.isAnagram('anagram', 'nagaram'))
    })
    it('should return false, rat !== car', () => {
        expect(mod_arrays_hashing.isAnagram('anagram', 'nagaram'))
    })
  })
})
