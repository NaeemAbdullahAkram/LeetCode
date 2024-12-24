class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        if min(nums) >= k :return 0
        count = 0
        while min(nums) < k :
            nums.remove(min(nums))
            count += 1
        return count
        