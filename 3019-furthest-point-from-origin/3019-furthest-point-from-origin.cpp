class Solution {
public:
    int furthestDistanceFromOrigin(string moves) {
        int countL = 0;
        int countR = 0;
        int count_ = 0;
        
        int n = moves.size();
        for(int i=0;i<n;i++){
            if(moves[i] =='L'){
                countL++;
            }
            else if(moves[i] == 'R'){
                countR++;
            }
            else{
                count_++;
            }
        }
        int ans = max(countL,countR) - min(countL,countR) + count_;
        return ans;
        
    }
};