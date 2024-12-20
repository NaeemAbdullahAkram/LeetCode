class Solution {
public:
    int minMaxGame(vector<int>& nums) 
    {
        while( nums.size()>1)
        {
            vector<int>a;
            for( int i=0 ; i<nums.size()/2 ; i++ )
            {
                if( i%2==0 )
                    a.push_back( min(nums[2*i] , nums[2*i +1] ) );

                else
                    a.push_back( max(nums[2*i] , nums[2*i +1] ) );
            }
            nums=a;
        }
        return nums[0];
    }
};