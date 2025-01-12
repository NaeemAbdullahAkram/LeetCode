class Solution {
public:
    int countWords(vector<string>& s1, vector<string>& s2) {
    unordered_map<string,int> count1;
    unordered_map<string,int> count2;

    for(const auto & data: s1)
        count1[data]++;

    for(const auto & data: s2)
        count2[data]++;

    unordered_map <string, int> final;

    for(const auto & data: count1)
    {
        if(data.second==1)
            final[data.first]++;
    }

    for(const auto & data: count2)
    {
        if(data.second==1)
            final[data.first]++;
    }

    int count=0;
    for( auto & i: final)
        if(i.second == 2)
            count++;

    return count;
    }
};