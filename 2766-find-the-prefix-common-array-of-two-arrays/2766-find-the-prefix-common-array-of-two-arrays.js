/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let commonCount = 0;
    let ans = [];
    let seen = new Set();

    for(let i=0;i<A.length;i++){
        if(seen.has(A[i])){
            commonCount++;
        }
        else{
            seen.add(A[i]);
        }


        if(seen.has(B[i])){
            commonCount++;
        }
        else{
            seen.add(B[i]);
        }

        ans.push(commonCount);
    }
    return ans;
};