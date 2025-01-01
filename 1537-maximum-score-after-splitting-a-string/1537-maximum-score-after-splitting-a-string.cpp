class Solution {
public:
    int maxScore(string s) {
        int n = s.length();
        vector<int> pre(n, 0), suf(n, 0);
        
        // Calculate prefix array
        pre[0] = (s[0] == '0') ? 1 : 0;
        for (int i = 1; i < n; i++) {
            pre[i] = pre[i - 1] + (s[i] == '0');
        }
        
        // Calculate suffix array
        suf[n - 1] = (s[n - 1] == '1') ? 1 : 0;
        for (int i = n - 2; i >= 0; --i) {
            suf[i] = suf[i + 1] + (s[i] == '1');
        }
        
        // Calculate maximum score
        int ans = 0;
        for (int i = 0; i < n - 1; i++) {
            ans = max(ans, pre[i] + suf[i + 1]);
        }
        
        return ans;
    }
};