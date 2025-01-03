/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let ttl = nums.reduce((acc,sum)=>acc+sum,0);
    let count=0;
    let crr=0;
    for(let i=0;i<nums.length-1;i++){
        crr+=nums[i];
        ttl -=nums[i]
        if(crr>=ttl){
            count++
        }
    }
    return count;
};