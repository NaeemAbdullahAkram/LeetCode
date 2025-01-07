class Solution:
    def maxSumDivThree(self, nums: List[int]) -> int:
        self.dp = {}
        max_sum = self.maxSumDivThreeUtil(nums, 0, 0)
        
        return max_sum if max_sum > 0 else 0
    
    def maxSumDivThreeUtil(self, nums, i, curr_sum) :
        if i == len(nums) :
            return 0 if curr_sum == 0 else -sys.maxsize

        if (i, curr_sum) in self.dp :
            return self.dp[(i, curr_sum)]

        self.dp[(i, curr_sum)] = max(
            nums[i] + self.maxSumDivThreeUtil(nums, i+1, (curr_sum + nums[i]) % 3), self.maxSumDivThreeUtil(nums, i+1, curr_sum)
        )

        return self.dp[(i, curr_sum)]
        