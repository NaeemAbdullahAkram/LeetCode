/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const g = {};
    let steps = 0;
    let r= false;
    for(let i=board.length-1; i>=0 ; i--){
        if(r){
            board[i].reverse()
        }
        r=!r;
        for(let j=0; j< board[i].length; j++){
            steps++;
            if(board[i][j] !== -1){
                g[steps] = board[i][j];
            }else{
                g[steps] = steps;
            }
        }
    }
    
    // let q = [[position, moveTillNow]]
    let q = [[1,0]];
    const visited = new Set()
    
    while(q.length){
        const [c,m] = q.shift();
        if(c === steps) return m;

        for(let i=c+1; i<c+7; i++){
            if(g[i] && g[i] !== c && !visited.has(g[i])){
                // in BFS we visit any node with minimum steps in first time
                visited.add(g[i]);
                q.push([g[i],m+1]);
            }
        }
        
    }
    
    return -1;
    
};