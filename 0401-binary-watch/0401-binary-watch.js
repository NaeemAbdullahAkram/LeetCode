/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    if(turnedOn > 8) return [];
    let hours = {0: [0], 1:[1, 2]}
    let minutes = {0: ["00"], 1:["01", "02"]}
    let res = [];
    let getNumsOf1 = (i) => Number(i).toString(2).split("").filter(e => e==="1").length
    for(let i=3; i<12; i++) {
        let numsOf1 = getNumsOf1(i);
        hours[numsOf1] = hours[numsOf1] === undefined ? [i] : [...hours[numsOf1], i];
    }
    for(let i=3; i<60; i++) {
        let numsOf1 = getNumsOf1(i);
        let min = i < 10 ? "0" + i : i;
        minutes[numsOf1] = minutes[numsOf1] === undefined ? [min] : [...minutes[numsOf1], min];
    }
    for(let i=0; i<=turnedOn; i++) {
        for(let j=0; j<=turnedOn; j++) {
            if(i+j !== turnedOn) continue;
            if(hours[i] === undefined || minutes[j] === undefined) continue;
            for(h of hours[i]) {
                for(m of minutes[j]) {
                    res.push(`${h}:${m}`);
                }
            }
        }
    }
    return res;
};