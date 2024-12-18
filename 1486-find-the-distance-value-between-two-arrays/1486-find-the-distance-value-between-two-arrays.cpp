class Solution {
public:
    int findTheDistanceValue(vector<int>& arr1, vector<int>& arr2, int d) 
    {
      int i=0,j=0,ans=0;
      while(i<arr1.size())
      {
        if(j<arr2.size())
        {
         if(abs(arr1[i]-arr2[j])>d)
            j++;
         else
         {
            i++;
            j=0;
         }
        }
        else
        {
          i++;
          ans++;
          j=0;
        } 
      }
      return ans; 
    }
};