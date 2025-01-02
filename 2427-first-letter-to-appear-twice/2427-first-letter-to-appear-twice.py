class Solution:
    def repeatedCharacter(self, s: str) -> str:
        seen = 0
        for c in s:
            if seen & (1 << (ord(c)-ord('a'))):
                return c
            else:
                seen |= 1 << (ord(c)-ord('a'))