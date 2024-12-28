class Solution:
    def totalHammingDistance(self, nums: List[int]) -> int:
        counts = [0 for n in range(32)]
        for n in nums:
            for i in range(32):
                counts[i] += n & 1
                n >>= 1
        res = 0
        # print(counts)
        for i in range(32):
            res += counts[i] * (len(nums) - counts[i])
        return res