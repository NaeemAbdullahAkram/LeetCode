/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    const len = s.length;
    let moves = 0;
    let counter = 0;
    for(let i = 0; i < len; i++) {
        if(s[i] === 'X' && (counter === 0 || counter === 3)) {
            counter = 0;
            counter++
            moves++;
            continue;
        }
        if((s[i] === 'X' || s[i] === 'O') && (counter > 0 && counter < 3)) {
            counter++;
        } else {
            counter = 0;
        }
    }
    return moves;
};