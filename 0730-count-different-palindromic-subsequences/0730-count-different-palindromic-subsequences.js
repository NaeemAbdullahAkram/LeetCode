

/**
 * @param {string} S
 * @return {number}
 */
var countPalindromicSubsequences = function (S) {
  const MOD = 1000000007, arr = S.split(''), CHARS = ['a', 'b', 'c', 'd']
  let dp = arr.map(x => arr.map(y => ({ a: 0, b: 0, c: 0, d: 0 })))
  // 0 , if L>R or (L=R and S[L]!=alpha)
  // 1 , if L=R and S[L]=alpha
  // DP(L + 1, R, alpha) + DP(L, R-1,alpha) - DP(L+1, R-1,alpha) , if S[L] != S[R]
  // 2+ SUM(DP(L+1,R-1, Betha) ) where Betha is all the alphabet , if S[L] = S[R] and S[L]=alpha
  // https://leetcode.com/problems/count-different-palindromic-subsequences/discuss/272297/DP-C%2B%2B-Clear-solution-explained

  for (let i = 0; i < S.length; i++) {
    dp[i][i][S[i]] = 1
  }
  for (let offset = 1; offset < S.length; offset++) {
    for (let i = 0; i < S.length - offset; i++) {
      let j = i + offset

      CHARS.forEach(x => {
        if (S[i] != S[j] || x != S[i]) {
          dp[i][j][x] = (dp[i + 1][j][x] + dp[i][j - 1][x] - dp[i + 1][j - 1][x]) % MOD
        } else {
          dp[i][j][x] = (CHARS
            .map(x => dp[i + 1][j - 1][x])
            .reduce((a, b) => (a + b) % MOD) + 2) % MOD
        }
      })

    }
  }
  let rtn = 0
  for (let k in dp[0][S.length - 1]) {
    rtn += dp[0][S.length - 1][k] % MOD
  }
  return rtn % MOD
};

// console.log(countPalindromicSubsequences('abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'))

// console.log(countPalindromicSubsequences('bccb'))