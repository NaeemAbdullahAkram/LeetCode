class Solution:
    def smallestRangeII(self, nums: List[int], k: int) -> int:
        if len(nums) == 1:return 0
        nums.sort()
        dp1 = []
        n = len(nums)
        for i,a in enumerate(nums):
            dp1.append([nums[0]+k,a+k])
        dp2 = []
        for i in range(n-1,-1,-1):
            a = nums[i]
            dp2.append([a-k,nums[-1]-k])
        dp2 = dp2[::-1]
        res = dp2[0][1] - dp2[0][0]
        dp1 = dp1[:-1]
        dp2 = dp2[1:]
        for (a,b),(c,d) in zip(dp1,dp2):
            res = min(res,max(b,d)-min(a,c))
            
        return res



        