class Solution {
    fun countRoutes(l: IntArray, start: Int, finish: Int, fuel: Int): Int {
        val dp = Array(l.size) { IntArray (fuel + 1) { -1 } }
        val mod = 1000000007

        fun dfs(i: Int, f: Int): Int {
            if (f < 0) return 0
            if (dp[i][f] != -1) return dp[i][f] 

            dp[i][f]  = if (i == finish) 1 else 0

            for (j in 0 until l.size) {
                if (i == j) continue
                dp[i][f] = (dp[i][f] + dfs(j, f - Math.abs(l[i] - l[j]))) % mod
            }

            return dp[i][f]
        }

        return dfs(start, fuel)
    }
}