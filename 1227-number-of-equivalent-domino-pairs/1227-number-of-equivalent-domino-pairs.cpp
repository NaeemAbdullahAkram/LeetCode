class Solution {
public:
    int numEquivDominoPairs(vector<vector<int>>& dom) {
        unordered_map<int, int> freq;
        int cnt = 0;

        for (auto &domino : dom) {
            int a = domino[0], b = domino[1];
            int key = min(a, b) * 10 + max(a, b);  // Create a unique key for each domino
            cnt += freq[key];  // Add the count of previously seen equivalent dominoes
            freq[key]++;  // Increment the frequency of this domino
        }

        return cnt;
    }
};