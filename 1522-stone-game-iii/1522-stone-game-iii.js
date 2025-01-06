/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
    const n = stoneValue.length
    const dp = Array(n + 1).fill(0)
    const prefixSum = Array(n + 1).fill(0)

    for(let i = n - 1; i>=0; i--){
        prefixSum[i] = prefixSum[i + 1] + stoneValue[i]
        dp[i] = Number.NEGATIVE_INFINITY 

        for(let k = 1; k <= 3; k++){
            if (i + k > n ) break
            const score = prefixSum[i] - prefixSum[i+k]
            dp[i] = Math.max(dp[i], score - dp[i + k])
        }
    }

    return dp[0] > 0 ? "Alice" : dp[0] < 0 ? "Bob" : "Tie"
};