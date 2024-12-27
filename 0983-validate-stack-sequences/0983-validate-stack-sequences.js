/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack=[]
    let j=0
    let n =popped.length

    for(i=0;i<n;i++){
        stack.push(pushed[i])
        while(stack.length>0 && stack[stack.length-1]==popped[j]){
            stack.pop()
            j++
        }
    }
    return stack.length===0
};