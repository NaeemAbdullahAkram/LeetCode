class Solution(object):
    def makeStringsEqual(self, s, target):
        """
        :type s: str
        :type target: str
        :rtype: bool
        """
        s_count = Counter(s)
        target_count = Counter(target)
        
        if target_count["1"] >= 1 and s_count["1"] == 0:
            return False
        if target_count["1"] == 0 and s_count["1"] > 0:
            return False
        return True