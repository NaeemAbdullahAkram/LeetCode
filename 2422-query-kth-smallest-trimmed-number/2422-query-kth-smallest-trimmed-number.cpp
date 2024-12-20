class Solution {
public:
    vector<int> smallestTrimmedNumbers(vector<string>& a, vector<vector<int>>& quaries) {
        vector<int> ans;
        int n=a[0].size();
        
        for(auto& v:quaries){
            priority_queue<pair<string,int>,vector<pair<string,int>>,greater<pair<string,int>>> pq;
            for(int i=0; i<a.size(); i++){
                pq.push({a[i].substr(n-v[1]),i});
            }
            int k=v[0];
            while(k>1){
                pq.pop();
                k--;
            }
            ans.push_back(pq.top().second);
        }
        return ans;
    }
};