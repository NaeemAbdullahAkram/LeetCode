class Solution {
public:
    string makeSmallestPalindrome(string s) {
        int l=s.length();
        for(int i=0;i<l/2;i++){
            if(s[i]!=s[l-1-i]){
                if(s[i]<s[l-1-i]){ //checking the ascii values of the 
                                   // characters then making them same
                    s[l-1-i]=s[i];
                }
                else{
                    s[i]=s[l-1-i];
                }
            }
        }
        return s;
    }
};