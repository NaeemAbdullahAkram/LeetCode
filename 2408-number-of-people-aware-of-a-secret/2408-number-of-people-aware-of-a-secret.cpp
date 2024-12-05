class Solution {
public:
    #define ll long long int
    ll mod=1000000007;
    ll forg;ll del;
    ll dp[1001][1001];
    ll dfs(ll curr,ll rem,ll n){
        if(curr>n){
            if(rem<0)return 0;
            return 1;
        }
        if(rem<=0)return 0;
        if(dp[curr][rem]!=-1)return dp[curr][rem];
        ll ans=0;
        ans=(ans+dfs(curr+del,forg-del,n))%mod;
        ans=(ans+dfs(curr+1,rem-1,n))%mod;
        ans%=mod;
        return dp[curr][rem]=ans;
    }
    int peopleAwareOfSecret(int n, int delay, int forget) {
        forg=forget;del=delay;
        memset(dp,-1,sizeof(dp));
        ll ans=dfs(1+delay,forget-(delay),n);
        ans%=mod;
        return ans;
    }
};