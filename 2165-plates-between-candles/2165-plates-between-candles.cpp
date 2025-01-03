class Solution {
public:
    vector<int> platesBetweenCandles(string s, vector<vector<int>>& queries) {
        vector<int>bar;
        int i=0;
        for(char ch : s)
        {
            if(ch=='|') bar.push_back(i);
            i++;
        }
        vector<int>ans;
        for(auto it: queries)
        {
            int l=it[0];
            int r=it[1];
            int i=lower_bound(bar.begin(),bar.end(),l)-bar.begin();
            int j=upper_bound(bar.begin(),bar.end(),r)-bar.begin()-1;
            if(j<=i)ans.push_back(0);
            else ans.push_back(bar[j]-bar[i]-(j-i));
        }
        return ans;
    }
};