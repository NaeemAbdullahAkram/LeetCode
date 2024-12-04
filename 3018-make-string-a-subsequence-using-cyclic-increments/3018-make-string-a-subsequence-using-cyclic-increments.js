/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
    if (str2.length > str1.length) return false
    let i = 0, j = 0, found = 0
    while (i < str1.length && j < str2.length) {
        if (str1[i] == str2[j]) {
            j++
            found++
        } else if (str2[j] == "a" && str1[i] == "z") {
            found++
            j++
        } else if (str1[i].charCodeAt() + 1 == str2[j].charCodeAt()) {
            found++
            j++
        }
        if (found == str2.length) return true
        i++
    }

    return false

};