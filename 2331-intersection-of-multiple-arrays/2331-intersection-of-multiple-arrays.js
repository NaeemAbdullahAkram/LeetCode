/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let op = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            let count = 0;
            for (let k = 0; k < nums.length; k++) {
                if (nums[k].includes(nums[i][j])) {
                    count++;
                }
            }
            if (count == nums.length && !op.includes(nums[i][j])) {
                op.push(nums[i][j]);
            }
        }
    }
    return op.sort((a, b) => a - b);
};