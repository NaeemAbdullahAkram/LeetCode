class Solution {
public:
    long long minSumSquareDiff(vector<int>& nums1, vector<int>& nums2, int k1, int k2) {
        long long mov = k1+k2;
        vector<long long> absdiff(nums1.size());
        for(int i=0; i<nums1.size();i++){
            absdiff[i] = abs(nums1[i] - nums2[i]);
        }
        int ind = 0;
        long long sum = 0;
        sort(absdiff.begin(), absdiff.end(), greater<long long>());
        for(int i=0; i<nums1.size()-1; i++){
            long long reqmv = (i+1)*(absdiff[i]-absdiff[i+1]);
            // cout<<i<<" "<<reqmv<<" "<<mov<<endl;
            if(mov == 0){
                sum += (absdiff[i]*absdiff[i]);
                continue;
            }
            if(mov >= reqmv){
                mov -= reqmv;
                if(mov==0){
                    sum += (absdiff[i+1]*absdiff[i+1])*(i+1);
                }
            }
            else{
                long long a = mov/(i+1);
                long long b = mov%(i+1);
                long long n = absdiff[i] - a;
                sum = (n*n) * (i+1 - b) + ((n-1)*(n-1)) * b;
                // cout<<n<<" "<<a<<" "<<b<<endl;
                
                mov = 0;
            }
        }
        if(mov == 0){
            sum += (absdiff.back() * absdiff.back());
        }
        else{
            long long a = mov/(absdiff.size());
            long long b = mov%(absdiff.size());
            long long n = max(absdiff.back()-a, 0ll);
            
            sum += (n*n) *  (absdiff.size() - b);
            sum += (max(n-1, 0ll))*(max(n-1, 0ll)) * (b);
            
        }
        return sum;

    }
};