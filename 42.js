// Given n non-negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it can trap after raining.

// https://leetcode.com/problems/trapping-rain-water/


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {


    let N = height.length

    let maxLeft = new Array(N)
    let maxRight = new Array(N)
    let result = new Array(N)


    maxLeft[0] = 0
    for (let i = 1; i < N; i++) {
        maxLeft[i] = Math.max(height[i - 1], maxLeft[i - 1])
    }

    maxRight[N - 1] = 0
    for (let i = N - 2; i >= 0; i--) {
        maxRight[i] = Math.max(height[i + 1], maxRight[i + 1])
    }

    for (let i = 0; i < N; i++) {
        let res = Math.min(maxRight[i], maxLeft[i]) - height[i]
        if (res < 0) res = 0
        result[i] = res
    }

    let sum = 0
    for (let i = 0; i < N; i++) {
        sum += result[i]
    }

    return sum
}

// driver code

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(trap(height))