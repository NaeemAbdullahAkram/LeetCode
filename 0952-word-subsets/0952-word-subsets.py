class Solution:
    def wordSubsets(self, words1: List[str], words2: List[str]) -> List[str]:
        tempwordcount=[0]*26
        maxwordcount=[0]*26
        universals=[]
        for word in words2:
            for ch in word:
                tempwordcount[ord(ch)-ord('a')]+=1
        
            for i in range(26):
                maxwordcount[i]=max(maxwordcount[i],tempwordcount[i])
            tempwordcount=[0]*26
        

        for word in words1:
            for ch in word:
                 tempwordcount[ord(ch)-ord('a')]+=1
               
            is_universal=True
            for i in range(26):
                if tempwordcount[i]<maxwordcount[i]:
                    is_universal=False
                    break
            if is_universal:
                universals.append(word)
            tempwordcount=[0]*26

        return universals

