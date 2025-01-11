class Solution:
    def canConstruct(self, s: str, k: int) -> bool:
        return len(s) >= k and sum(v % 2 for v in [s.count(c) for c in set(s)]) <= k