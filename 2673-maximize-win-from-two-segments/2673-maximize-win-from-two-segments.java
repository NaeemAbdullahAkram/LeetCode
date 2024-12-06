class Solution {
    public int maximizeWin(int[] A, int k) {
        //dp[i] means array from [0, i - 1] max segment length;
        int n = A.length, res = 0;
        int[] dp = new int[n];
        for(int i = 0, j = 0; i < n; ++i){
            while(j < n && A[j] - A[i] <= k){
                int prev = j - 1 >= 0 ? dp[j - 1]: 0;
                dp[j] = Math.max(prev, j - i + 1);
                ++j;
            }
//            int prev = i - 1 >= 0 ? dp[i - 1] : 0;
//            res = Math.max(prev + j - i, res);
        }
        for(int i = 0, j = 0; i < n; ++i){
            while(j < n && A[j] - A[i] <= k){
                ++j;
            }
            int prev = i - 1 >= 0 ? dp[i - 1] : 0;
            res = Math.max(j - i + prev, res);
        }
        return res;
    }
}