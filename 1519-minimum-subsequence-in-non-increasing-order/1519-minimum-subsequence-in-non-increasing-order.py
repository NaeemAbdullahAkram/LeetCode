class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        n = len(nums)
        if n == 1:
            return nums
        else:
            i, j, total = 0, 0, sum(nums)
            half  = total/2
            
            nums.sort(reverse=True)
            curr_sum = sum(nums[i:j+1])
    
            while j < n:
                if curr_sum <= half:
                    j += 1
                    curr_sum += nums[j]
                elif curr_sum > half:
                    while curr_sum > half:
                        if curr_sum - nums[i] <= half:
                            break
                        curr_sum -= nums[i]
                        i += 1
                    break
            return nums[i:j+1]

        