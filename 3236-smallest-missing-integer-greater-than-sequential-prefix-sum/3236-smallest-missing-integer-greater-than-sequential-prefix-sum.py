class Solution(object):
    def missingInteger(self, nums):
        temp = []
        for i in range(len(nums)-1):
            if nums[i+1]-nums[i] == 1:
                temp+=[nums[i]]
            else:
                temp+=[nums[i]]
                break
        else:
            temp+=[nums[-1]]
        t = sum(temp)
        while True:
            if t not in nums:
                return t
            t+=1