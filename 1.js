/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    let cache = {}
    let N = nums.length
    for (let i = 0; i < N; i++) {
        let num = nums[i]
        let diff = target - num

        // put the difference in a map and match
        if (cache[num] != undefined) {
            return [cache[num], i]
        }
        cache[diff] = i
    }
};

// the big idea is to put the difference needed to make a sum as the key, and the index as the value.
// then we go to the next
// if the current number is a key in cache, it means it adds to the number whose index is stored there
// if not, put this number's difference as a key and move on.

console.log(twoSum([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSum([3, 2, 4], 6)) // [0,1]

// pretty good solution, actually