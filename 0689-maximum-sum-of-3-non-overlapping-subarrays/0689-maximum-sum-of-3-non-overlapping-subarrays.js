/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
     const n = nums.length;

    // Calculate the sum of every subarray of length k
    const subarraySums = Array(n - k + 1).fill(0);
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    subarraySums[0] = sum;
    for (let i = k; i < n; i++) {
        sum += nums[i] - nums[i - k];
        subarraySums[i - k + 1] = sum;
    }

    // Find the maximum sum for each window of k elements
    const leftMax = Array(n - k + 1).fill(0);
    let maxIndex = 0;
    for (let i = 0; i < n - k + 1; i++) {
        if (subarraySums[i] > subarraySums[maxIndex]) {
            maxIndex = i;
        }
        leftMax[i] = maxIndex;
    }

    const rightMax = Array(n - k + 1).fill(0);
    maxIndex = n - k;
    for (let i = n - k; i >= 0; i--) {
        if (subarraySums[i] >= subarraySums[maxIndex]) {
            maxIndex = i;
        }
        rightMax[i] = maxIndex;
    }

    // Find the maximum sum of three non-overlapping subarrays
    let maxSum = 0;
    let result = [0, 0, 0];
    for (let j = k; j <= n - 2 * k; j++) {
        let left = leftMax[j - k];
        let right = rightMax[j + k];
        let sum = subarraySums[left] + subarraySums[j] + subarraySums[right];
        if (sum > maxSum) {
            maxSum = sum;
            result = [left, j, right];
        }
    }

    return result;
};