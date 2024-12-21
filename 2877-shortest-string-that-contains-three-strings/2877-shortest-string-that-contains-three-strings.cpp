class Solution {
public:
    static bool compare(string a,string b){
        if(a.size()==b.size()){
            return a<b;
        }
        return a.size()<b.size();
    }
    bool knuthMorrisPrattAlgorithm(string str, string substr) {
        // building pattern
        int l = substr.size();
        vector<int>pattern(l,-1);
        int j = 0,i = 1;
        while(i<l){
            if(substr[i]==substr[j]){
                pattern[i]=j;
                i++;
                j++;
            }
            else if(j>0){
                j = pattern[j-1]+1;
            }
            else{
                i++;
            }
        }


        // string matching
        i=0;j=0;
        while(j!=l && i<str.size()){
            if(str[i]==substr[j]){
                i++;
                j++;
            }
            else if(j>0){
                j = pattern[j-1]+1;
            }
            else{
                i++;
            }
        }
        return j==l;
}
    string helper(string s,string p){
        if(knuthMorrisPrattAlgorithm(s,p)){
            return s;
        }
        string ans = s;
        string str = p+"#"+s;
        int l = str.size();
        vector<int>pattern(l,-1);
        int i = 1,j = 0;
        while(i<l){
            if(str[i]==str[j]){
              pattern[i]=j;
              i++;
              j++;
            }
            else if(j>0){
              j = pattern[j-1]+1;
            }
            else{
              i++;
            }
        }

        i = pattern[l-1];
        if(i==-1){
            return s+p;
        }
        i++;
        for(;str[i]!='#';i++){
            ans+=str[i];
        }
        return ans;
    }
    string minimumString(string a, string b, string c) {
        // a,b,c
        vector<string>str;
        string s = helper(a,b);
        s = helper(s,c);
        str.push_back(s);
        
        // a,c,b
        s = helper(a,c);
        s = helper(s,b);
        str.push_back(s);
        
        // b,a,c
        s = helper(b,a);
        s = helper(s,c);
        str.push_back(s);
        
        // b,c,a
        s = helper(b,c);
        s = helper(s,a);
        str.push_back(s);
        
        // c,b,a
        s = helper(c,b);
        s = helper(s,a);
        str.push_back(s);
        
        // c,a,b
        s = helper(c,a);
        s = helper(s,b);
        str.push_back(s);
        
        sort(str.begin(),str.end(),compare);
        return str[0];
        // string ans = "";
        // int len = 500;
        // for(int i = 0;i<6;i++){
        //     int l = str[i].size();
        //     if(l<len){
        //         len = l;
        //         ans = str[i];
        //     }
        // }
        // return ans;
        
    }
};