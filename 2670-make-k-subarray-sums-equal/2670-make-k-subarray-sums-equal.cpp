class Solution {
public:
    long long makeSubKSumEqual(vector<int>& arr, int k) {
        int n = arr.size();
        int box_cnt = __gcd(n, k);

        vector<vector<long long>> container(box_cnt);
        for(int i = 0; i<n; i++){
            container[i%box_cnt].push_back(arr[i]);
        }

        long long ans = 0;
        for(auto items : container){
            sort(begin(items), end(items));
            int item_size = items.size();
            int median;
            if(item_size%2 == 1)
                median = items[item_size/2];
            else
                median = (items[(item_size/2)-1]+items[item_size/2])/2;

            for(auto ele: items){
                ans += abs(median-ele);
            }
        }

        return ans;
    }
};