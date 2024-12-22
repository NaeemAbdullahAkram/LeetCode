class Solution {
    public int accountBalanceAfterPurchase(int purchaseAmount) {
        int balance = 100;
        
        int ones = purchaseAmount %10;
        int tens = purchaseAmount /10;
        
        if(ones<5 && ones>=0){
            ones = 0;
        }
        else if(ones<10 && ones >4){
            ones = 0;
            tens = tens+1;
        }
        
        int spent = tens*10+ones;
        
        balance = 100 - spent;
        return balance;
    }
}