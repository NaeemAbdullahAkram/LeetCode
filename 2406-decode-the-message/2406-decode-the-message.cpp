class Solution {
public:
    string decodeMessage(string key, string message) {
        int n=key.size(),m=message.size();
        int k=0;
        vector<char> mp(26);
        for(int i=0;i<n;i++){
            if(key[i]==' ' || mp[key[i]-'a']) continue;
            else {
                mp[key[i]-'a']=k+'a';
                k++;
            }
        }
        for(int i=0;i<m;i++){
            if(message[i]!=' ') message[i]=mp[message[i]-'a'];
        }
        return message;
    }
};