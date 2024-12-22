/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
if (nums.length-1 < 2) return -1;
for(let i=0; i<nums.length ; i++){
    if (nums[i]!= max && nums[i]!= min){
        return nums[i];
    }
}

};