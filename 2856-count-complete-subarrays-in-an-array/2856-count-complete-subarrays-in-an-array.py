class Solution:
    def countCompleteSubarrays(self, nums: List[int]) -> int:
        distinct = len(set(nums))
        left = 0
        right = 0
        res = 0
        counter = {}
        while right < len(nums):
            if not nums[right] in counter:
                counter[nums[right]] = 0
            counter[nums[right]] += 1
            
            while len(counter) == distinct:
                counter[nums[left]] -= 1
                if counter[nums[left]] == 0:
                    del counter[nums[left]]
                left += 1
            res += left
            right += 1
            
        return res
    