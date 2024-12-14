class Solution:
    def continuousSubarrays(self, nums: List[int]) -> int:
        minimum = collections.deque()
        maximum = collections.deque()
        sol = j = 0
        for i in range(len(nums)):
            while minimum and minimum[-1][0] >= nums[i]:minimum.pop()
            minimum.append([nums[i], i])
            while maximum and maximum[-1][0] <= nums[i]:maximum.pop()
            maximum.append([nums[i], i])
            if maximum[0][0] - minimum[0][0] > 2:
                if maximum[0][0] == nums[i]:j = minimum[0][1]+1
                else:j = maximum[0][1]+1
                while minimum[0][1] < j:minimum.popleft()
                while maximum[0][1] < j:maximum.popleft()
            sol += i-j+1
        return sol