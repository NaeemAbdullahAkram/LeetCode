class Solution:
    def longestCommonSubpath(self, n, paths):
        def get_hash(path,k):
            h, base, ans = 0, 1<<17, set()

            for i in range(len(path)):
                h = h*base + path[i]

                if i >= k:
                    h -= path[i-k]*pow(base,k,self.mod)

                h = h%self.mod

                if i >= k-1:
                    ans.add(h)

            return ans

        self.mod =  (1<<128)-159

        low, high = 0, min(len(p) for p in paths)

        while low <= high:
            mid = (low+high)//2
            tt = set.intersection(*[get_hash(p,mid) for p in paths])

            if len(tt):
                low = mid + 1
            else:
                high = mid - 1

        return high