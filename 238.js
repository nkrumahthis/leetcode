// product of array except self without using the division
/**
 * 
 * @param {Array<number>} nums 
 */
function solution(nums) {
    let numsLength = nums.length
    let prefix = new Array(numsLength)
    let postfix = new Array(numsLength)
    let result = new Array(numsLength)

    prefix[0] = 1
    postfix[numsLength - 1] = 1

    for (let i = 1; i < numsLength; i++) {
        let j = numsLength - 1 - i
        prefix[i] = prefix[i - 1] * nums[i - 1]
        postfix[j] = nums[j + 1] * postfix[j + 1]
    }

    for (let i = 0; i < numsLength; i++) {
        result[i] = prefix[i] * postfix[i]
    }

    return result;
}

console.log(solution([1, 2, 3, 4])) // [24, 12, 8, 6]