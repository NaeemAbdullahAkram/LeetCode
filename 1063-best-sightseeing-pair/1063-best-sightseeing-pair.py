class Solution:
    def maxScoreSightseeingPair(self, values: List[int]) -> int:
        max_score = 0 
        maxing_i = values[0] + 0 

        for j in range(1,len(values)):

            cur_score = maxing_i + values[j] - j
            max_score = max(max_score, cur_score)
            maxing_i = max(maxing_i, values[j] + j)
        
        return max_score