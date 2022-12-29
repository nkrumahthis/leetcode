/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let N = nums.length
    let s = new Set()
    for (let i = 0; i < N; i++) {
        // check if number already is in set. if it's already there, we found a duplicate
        if (s.has(nums[i])) return true
        s.add(nums[i])
    }
    // if we run through the loop to end, there is no duplicate
    return false;
};

// clever take
/**
 * var containsDuplicate = function(nums) {
 *     return [...new Set(nums)].length !== nums.length;
 * };
 */

console.log(containsDuplicate([1, 2, 3, 1])) // true
console.log(containsDuplicate([1, 2, 3])) // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])) // true

