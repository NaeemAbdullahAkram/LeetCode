class Solution {
public:
    string shiftingLetters(string s, vector<vector<int>>& shifts) {
        int n=s.length();
        vector<int> count(n+1,0);
        for(auto it:shifts){
            int l=it[0];
            int r=it[1];
            int dir=it[2];
            if(dir == 1){
                count[l]+=1;
                count[r+1]-=1;
            }else{
                count[l]-=1;
                count[r+1]+=1;
            }
        }
        //for(int i=0;i<=n;i++) cout<<count[i]<<" ";
        vector<int> pref(n+1,0);
        pref[0]=count[0];
        for(int i=1;i<=n;i++){
            pref[i]=count[i]+pref[i-1];
        }
        //cout<<pref[n]<<endl;
        for(int i=0;i<n;i++){
            int ele=s[i]-'a';
            if(pref[i] < 0){
                ele=(ele + pref[i]) % 26;
                //cout<<ele<<" ";
                ele=(ele + 26) % 26;
                cout<<ele<<endl;
                s[i]=(ele+'a');
            }else{
                ele = (ele + pref[i]) % 26;
                s[i]=(ele+'a');
            }
        }
        return s;
    }
};