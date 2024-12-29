class Solution:
    def numWays(self, words: List[str], target: str) -> int:
        MOD = 10 ** 9 + 7

        word_L = len(words[0])
        target_L = len(target)
        charFrequency = [[0] * 26 for _ in range(word_L)]

        for word in words:
            for idx, char in enumerate(word):
                charFrequency[idx][ord(char) - ord('a')] += 1
            
        dp = [0] * (target_L + 1)
        dp[0] = 1

        for i in range(word_L):
            for j in range(target_L - 1, -1, -1):
                if charFrequency[i][ord(target[j]) - ord('a')] > 0:
                    dp[j + 1] += dp[j] * charFrequency[i][ord(target[j]) - ord('a')]
                    dp[j + 1] %= MOD
                    
        return dp[target_L]


