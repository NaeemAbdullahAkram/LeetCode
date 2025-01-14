class Solution:
    def maxScore(self, nums: List[int]) -> int:
        nums.sort(reverse=True)
        print(nums)
        a = list(itertools.accumulate(nums))
        res = 0
        for c in a:
            if c > 0:
                res += 1
        return res