/**
 * @param {number[]} nums
 * @return {number[]}
 */
function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

function areCoprime(a, b) {
    return gcd(a, b) === 1;
}

var replaceNonCoprimes = function (nums) {
    let result = [];
    let i = 0;
    while (i < nums.length) {
        result.push(nums[i]);
        while (result.length >= 2 && !areCoprime(result[result.length - 2], result[result.length - 1])) {
            let last = result.pop();
            let secondLast = result.pop();
            result.push((last * secondLast) / gcd(last, secondLast));
        }
        i++;
    }
    return result;
};