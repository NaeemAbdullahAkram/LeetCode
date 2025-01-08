/**
 * @param {number[]} nums
 * @return {number}
 */

var sumImbalanceNumbers = function(nums) {
  let ans = 0
  for(let i = 0; i < nums.length-1; i++){
    const set = new Set([nums[i]])
    let max = nums[i], min = nums[i], imbalance = 0
    for(let j = i+1; j < nums.length; j++){
      if(!set.has(nums[j])){
        if(max < nums[j]){
          if(nums[j] > max+1)imbalance++
          max = nums[j]
        }else if(min > nums[j]){
          if(nums[j] < min-1)imbalance++
          min = nums[j]
        }else{
          if(set.has(nums[j]-1))imbalance--
          if(!set.has(nums[j]+1))imbalance++
        }
        set.add(nums[j])
      }
      ans += imbalance
    }
  }
  return ans
};