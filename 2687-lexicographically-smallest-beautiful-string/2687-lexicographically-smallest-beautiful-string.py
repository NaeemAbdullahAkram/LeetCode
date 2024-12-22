class Solution:
    def smallestBeautifulString(self, s: str, k: int) -> str:
        i=len(s)-1
        s=list(s)
        while(i>=0):
            j=ord(s[i])-96
            if(j!=k):
                for r in range(1,4):
                    for r1 in range(1,3):
                        if(i-r1>=0 and ((j+r>k) or s[i-r1]==chr(j+r+96))):
                            break
                    else:
                        s[i]=chr(j+r+96)
                        break
                else:
                    i-=1
                    continue
                break
            i-=1
        if(i==-1):
            return ""
        i+=1
        while(i<len(s)):
            for r in range(1,4):
                for r1 in range(1,3):
                    if(i-r1>=0 and ((r>k) or s[i-r1]==chr(r+96))):
                        break
                else:
                    s[i]=chr(r+96)
                    break
            i+=1
        return "".join(s)