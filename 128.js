/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    nums.sort((a, b) => a - b)
    // console.log(nums)
    let counter = 1;
    let longest = 1;
    let N = nums.length
    if (N == 0) return 0
    for (let i = 1; i < N; i++) {
        if (nums[i - 1] == nums[i]) {
            longest = Math.max(longest, counter)
        } else if (nums[i - 1] + 1 == nums[i]) {
            counter++
            longest = Math.max(longest, counter)
        } else {
            counter = 1
        }
    }
    return longest
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])) // 4
console.log(longestConsecutive([0])) // 1
console.log(longestConsecutive([])) // 0
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])) // 7
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])) // 9
console.log(longestConsecutive([1, 2, 0, 1])) // 3