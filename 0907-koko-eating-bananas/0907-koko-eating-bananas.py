class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l,r = 1,max(piles)
        min_k = r

        while l<=r:
            hours = 0
            m=(l+r)//2
            for p in piles:
                hours +=math.ceil(float(p) / m)
            if hours <= h:
                min_k = min(min_k,m)
                r=m-1
            else:
                l=m+1 
        return min_k