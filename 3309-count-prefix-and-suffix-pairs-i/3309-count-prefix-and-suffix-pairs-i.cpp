class Solution {
private:
    bool isPrefixandSuffix(const string &s1, const string &s2) {
        if (s1.length() > s2.length()) return false;
        if (s1 == s2) return true;

        for (size_t i = 0, j = 0; i < s1.length() && j < s2.length(); i++, j++) {
            if (s1[i] != s2[j]) return false;
        }

        for (int i = s1.length() - 1, j = s2.length() - 1; i >= 0 && j >= 0; i--, j--) {
            if (s1[i] != s2[j]) return false;
        }

        return true;
    }

public:
    int countPrefixSuffixPairs(const vector<string> &words) {
        int count = 0;

        for (size_t i = 0; i < words.size(); i++) {
            for (size_t j = i + 1; j < words.size(); j++) {
                if (isPrefixandSuffix(words[i], words[j])) count++;
            }
        }

        return count;
    }
};