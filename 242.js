/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // sort the characters of both strings. if they are all from the same letters, the result will be equal
    let ss = s.split("").sort().join("")
    let tt = t.split("").sort().join("")
    return ss == tt
};

// tests
console.log(isAnagram("anagram", "nagaram")) // true
console.log(isAnagram("rat", "cat")) // false