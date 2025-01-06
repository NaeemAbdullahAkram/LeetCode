/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let max = -Infinity
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j > i; j--) {
            if (s[i] == s[j]) {
                max = Math.max(max, j - i - 1)
                break;
            }
        }
    }
    if (max == -Infinity) return -1
    return max
};