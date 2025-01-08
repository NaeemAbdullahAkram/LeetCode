class Solution:
    def lastVisitedIntegers(self, nums: List[int]) -> List[int]:
        s=[]
        curr=0
        ans=[]
        for i in range(len(nums)):
            if nums[i]!=-1: 
                curr=0
                s.append(nums[i])
            else:
                if len(s)-1-curr<0:
                    ans.append(-1)
                else: ans.append(s[len(s)-1-curr])
                curr+=1
        return ans