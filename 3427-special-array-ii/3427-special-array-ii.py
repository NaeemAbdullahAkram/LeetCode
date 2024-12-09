class Solution:
    def isArraySpecial(self, nums: List[int], queries: List[List[int]]) -> List[bool]:
        fal = []
        for i in range(len(nums) - 1):
            if nums[i] % 2 == nums[i + 1] % 2:
                fal.append(i)

        res = [True] * len(queries)
        if not fal:
            return res

        for i, (s, e) in enumerate(queries):
            if s != e:
                idx = bisect.bisect_left(fal, s)
                if idx < len(fal) and fal[idx] < e:
                    res[i] = False

        return res