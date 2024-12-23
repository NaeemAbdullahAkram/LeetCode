/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
    let res = 0;
    const n = s.length;
    for(let i = 0; i<= n-k; i++) {
        if(isPalindrome(s, i, i+k-1))  {
            res++;
            i += k-1;
            continue;
        }
        if(isPalindrome(s, i, i+k)) {
            res++;
            i +=k;
            continue;
        }
    }
    return res;
    
};
function isPalindrome( s,  l,  r) {
    if(r >= s.length) {
        return false;
    }
    while (l < r) {
        if (s[l++] != s[r--])  {
            return false;
        }
    }
    return true;
}