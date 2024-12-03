class Solution {
public:
    string addSpaces(string s, vector<int>& spaces) {
        string str="";
        int n = s.size();
        int a = spaces.size();
        int j=0;
         int count =0;
       for(int i=0;i<a;i++){
             while(j<n && count<spaces[i]){
                 str+=s[j];
                 j++;
                 count++;
             }
             str+=' ';
       }
       while(j<n){
        str+=s[j];
        j++;
       }
       return str;
    }
};