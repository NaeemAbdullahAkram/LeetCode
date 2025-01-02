/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var checkVowels = (character)=>{
    if(character=='a' || character=='e' || character=='i' || character=='o' || character=='u'){
        return true;
    }
}

var vowelStrings = function(words, queries) {
    let countArr = [];
    let count =0;
    for(let i=0;i<words.length;i++){
        if(checkVowels(words[i][0]) && checkVowels(words[i][words[i].length-1])){
            count++;
        }
        countArr.push(count);
    }

    let result = [];
    for(let i=0;i<queries.length;i++){
        let start = queries[i][0];
        let end = queries[i][1];
        if(start==0){
            result.push(countArr[end])
        }
        else{
            result.push(countArr[end]-countArr[start-1]);
        }
    }
    return result;
};