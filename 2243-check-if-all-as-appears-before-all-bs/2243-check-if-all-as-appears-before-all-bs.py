class Solution:
    def checkString(self, s: str) -> bool:
        b = 0
        for x in s:
            if x == 'a' and b == 1:
                return False
            elif x == 'b':
                b = 1
        
        return True