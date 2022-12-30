/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let N = strs.length
    let anagramObject = {}
    for (let i = 0; i < N; i++) {
        // get sorted characters
        let sortedStr = strs[i].split("").sort().join("")
        // put as key in object, make value an array and push current word into array
        if (!anagramObject[sortedStr]) anagramObject[sortedStr] = []
        anagramObject[sortedStr].push(strs[i])
    }
    return Object.values(anagramObject)
};