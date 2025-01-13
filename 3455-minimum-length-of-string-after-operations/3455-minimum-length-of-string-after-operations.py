class Solution:
    def minimumLength(self, s: str) -> int:
        from collections import Counter
        freq = Counter(s)
        a = 0
        for k, v in freq.items():
            while v >= 3:
                a += 2
                v -= 2
        return len(s) - a