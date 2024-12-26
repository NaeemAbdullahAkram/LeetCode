class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int , int>p;
        priority_queue<pair<int,int> , vector<pair<int , int>>, greater<pair<int ,int>>> min_heap;//this is min heap;


        for(auto i : nums){
            p[i]++; //int this hash map we store first ele and then count of the ele 
        }

        for(auto & i : p){
            min_heap.push({i.second , i.first}); //first count then element
            if(min_heap.size()>k){
                min_heap.pop(); //if the size of the heap is greater thn the k just pop the lowest count pair

            }
        }

        vector<int>ans; //for return the ans
        while(k--){
           ans.push_back(min_heap.top().second);  //it gose still while k ==0 so it store the ele which is occur maximum time in the array 
           min_heap.pop(); //store the ele and pop it from the minheap
        }
   return ans;

    }
};