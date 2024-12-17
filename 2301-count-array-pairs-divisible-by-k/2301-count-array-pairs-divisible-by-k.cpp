class Solution {
public:
    long long countPairs(vector<int>& nums, int k) {

        ios::sync_with_stdio(false);
        cin.tie(nullptr);
        cout.tie(nullptr);
        
long long count = 0;
unordered_map <int,int> mp;
long long x = 0;
for(auto it : nums){
    if(it%k != 0 ){
        mp[gcd(it,k)]++;
    }
    else{
x++;
    }
}


count += x * nums.size() - (x*(x+1))/2;

long long y = 0;
for(auto it: mp){

    int z  = k/it.first;
    int zz = z;

    while(zz < k){
        if(mp.find(zz)!=mp.end()){
        if(zz == it.first){
            
            y+= ((mp[zz]-1)*(mp[zz]));
            
        }
       else y += mp[zz]*it.second;
       }
        zz+=z;
    }

}




count += y/2;



return count;






    }
};               