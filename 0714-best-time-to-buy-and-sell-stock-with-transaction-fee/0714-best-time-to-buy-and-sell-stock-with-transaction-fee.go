func maxProfit(prices []int, fee int) int {
    dp := [2]int{0, -prices[0]}
    
    for i := 1; i < len(prices); i++ {
        preCash, preStock := dp[0], dp[1]
        dp[0] = max(prices[i] - fee + preStock, dp[0])
        dp[1] = max(preCash - prices[i], dp[1])
    }
    
    return dp[0]
}