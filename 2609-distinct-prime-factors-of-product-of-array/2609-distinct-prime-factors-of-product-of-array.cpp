class Solution {
public:
    set<int> ss;
    void Prime(int n){
        int c = 2;
        while(n > 1){
            while(n%c==0){
                n /= c;
                ss.insert(c);
            }
            c++;
        }
    }
    
    int distinctPrimeFactors(vector<int>& nums) {
        set<int> s;
        for(int i : nums) s.insert(i);
        
       for(int i : s){
            Prime(i);
        }    
    
        return ss.size();
    }
};