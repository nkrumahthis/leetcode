/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let N = nums.length

    // get a map of frequencies of each element
    let freq = {}
    for (let i = 0; i < N; i++) {
        if (!freq[nums[i]]) freq[nums[i]] = 0
        freq[nums[i]]++
    }

    // turn object to array of tuples, sort them and return the keys(i.e. the elements)
    return Object.entries(freq).sort((a, b) => b[1] - a[1]).map(x => x[0]).slice(0, k)
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 4], 2))