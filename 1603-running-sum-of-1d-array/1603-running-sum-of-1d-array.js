/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function (nums) {
    const result = [];
    nums.forEach((element, index) =>{
        if(index === 0){
            result.push(element)
        }else{
            result.push(element+result[index-1])
        }
    })
    return result
};