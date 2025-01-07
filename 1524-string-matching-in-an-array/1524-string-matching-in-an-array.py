class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        word_dict = {}
        for word in words:
            hash = 0
            for c in word:
                hash = hash*29 + ord(c) - ord('a') + 1
            word_dict[hash] = word
        res = set()
        for word in words:
            n = len(word)
            for i in range(n):
                cur = 0
                for j in range(i, n):
                    cur = cur*29 + ord(word[j]) - ord('a') + 1
                    if not (i == 0 and j == n - 1) and cur in word_dict:
                        res.add(word_dict[cur])
        return list(res)
                         
                
     