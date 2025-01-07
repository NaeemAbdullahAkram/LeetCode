class Solution {
public:
    int maxNumberOfBalloons(string s) {
        vector <int> freq (26, 0) , tar ( 26 , 0);
        for ( int i = 0 ; i  < s.length() ; i++){
            freq[ s[i] - 'a']++;
        }
        string target = "balloon";
        int MIN = INT_MAX;
        for(int  i = 0 ; i  < target.length() ; i++){
            int pos = target[i] -'a';
            tar [ pos] ++;
        }
        for ( int  i = 0 ; i <  26 ; i ++){
            if(  tar[i] != 0){
                MIN = min ( MIN , freq[ i] / tar [i]);
            }
        }

        return MIN;
    }
};