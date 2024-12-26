/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let left = 0;
    let right = citations.length - 1;
    let n = citations.length;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (citations[mid] >= n - mid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return n - left;
};