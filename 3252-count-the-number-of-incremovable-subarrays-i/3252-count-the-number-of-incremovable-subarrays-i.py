class Solution:
    def incremovableSubarrayCount(self, nums: List[int]) -> int:
        n = len(nums)
        total_count = 0

        for start in range(n):
            for end in range(start, n):
                # Create the remaining array after removing the subarray nums[start:end+1]
                remaining = nums[:start] + nums[end+1:]

                # Check if the remaining array is strictly increasing
                is_incremovable = all(remaining[i] < remaining[i+1] for i in range(len(remaining) - 1))

                if is_incremovable:
                    total_count += 1

        return total_count