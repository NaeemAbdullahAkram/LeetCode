class Solution(object):
    def numberOfWays(self, startPos, endPos, k):
        """
        :type startPos: int
        :type endPos: int
        :type k: int
        :rtype: int
        """
        MOD = 10**9+7

        if endPos - startPos > k:
            return 0
        dp_len = 2 * k + 1
        if 0 > k + startPos - endPos or k + startPos - endPos >= dp_len:
            return 0

        pre_dp, next_dp = [0] * dp_len, [0] * dp_len
        pre_dp[k] = 1

        for step in range(k):
            for i in range(dp_len):
                next_dp[i] = (
                    (pre_dp[i-1] if 0 <= i - 1 < dp_len else 0) + 
                    (pre_dp[i+1] if 0 <= i + 1 < dp_len else 0)
                ) % MOD
            pre_dp, next_dp = next_dp, pre_dp

        return pre_dp[k + endPos - startPos]