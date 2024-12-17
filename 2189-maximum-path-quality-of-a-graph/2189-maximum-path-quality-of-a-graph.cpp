class Solution {
public:
    int time = 0;
    int ans = INT_MIN;

    void solve( int i , int quality , vector<int>& val 
                        , vector<vector<pair<int,int>>>& adj , vector<int>& visited , int maxi )
    {
        visited[i]++;
        if( visited[i] == 1 )
        {
            quality = quality + val[i];
        }

        if( i == 0 )
        {
            ans = max( ans , quality );
        }

        for( auto it : adj[i] )
        {
            if( time + it.second <= maxi )
            {
                time = time + it.second;
                solve( it.first , quality , val , adj , visited , maxi );
                time = time - it.second;
            }
        }

        visited[i]--;
    }

    int maximalPathQuality(vector<int>& values, vector<vector<int>>& edges, int maxTime) 
    {
        int n = values.size();
        vector<int> visited(n,0);

        vector<vector<pair<int,int>>> adj(n);
        for(auto e : edges)
        {
            adj[e[0]].push_back({e[1],e[2]});
            adj[e[1]].push_back({e[0],e[2]});
        }

        solve(0,0,values,adj,visited,maxTime);
        return ans;
    }
};