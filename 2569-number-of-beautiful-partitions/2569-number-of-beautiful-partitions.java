class Solution {
    private int mod=1000000007;
    public int beautifulPartitions(String s, int k, int minLength) {
        if(!checkPrime(s.charAt(0)) || checkPrime(s.charAt(s.length()-1)))    return 0;
        List<Integer> possibleDivisionInd= new ArrayList<>();
        possibleDivisionInd.add(0);
        boolean prevIsPrime=checkPrime(s.charAt(minLength-1));
        for(int i=minLength;i<=s.length()-minLength;i++){
            boolean currIsPrime=checkPrime(s.charAt(i));
            if(!prevIsPrime && currIsPrime) possibleDivisionInd.add(i);
            prevIsPrime=currIsPrime;
        }
        int n=possibleDivisionInd.size();
        if(n<k-1)   return 0;
        int dp[][]=new int[n][k];
        for(int i[]:dp) Arrays.fill(i,-1);
        return get_ans(possibleDivisionInd,0,k-1,minLength,dp,n);
    }
    private int get_ans(List<Integer> pTD,int ind,int k,int minLen,int[][] dp,int n){
        if(k==0)    return dp[ind][k]=(k==0?1:0);
        if(dp[ind][k]!=-1)    return dp[ind][k];
        int ans=0,minNextInd=pTD.get(ind)+minLen;
        for(int nextInd=ind+1;nextInd<n && n-nextInd>=k;nextInd++){   
            if(minNextInd<=pTD.get(nextInd)){
                ans=(ans+get_ans(pTD,nextInd,k-1,minLen,dp,n))%mod;
            }
        }
        return dp[ind][k]=ans;
    }
    private boolean checkPrime(char c){
        return (c=='2' || c=='3' || c=='5' || c=='7');
    }
}