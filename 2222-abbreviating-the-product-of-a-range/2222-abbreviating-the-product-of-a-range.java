class Solution {
    public static final double NATURAL_LOG_10 = Math.log(10);
    public static final double NATURAL_LOG_2 = Math.log(2);
    public static final double NATURAL_LOG_17 = Math.log(17);
    public static final double NATURAL_LOG_3 = Math.log(3);
    double ERR = 0.00000012;
    public String abbreviateProduct(int left, int right) {
        //for 0s, find number of 5 and 2 factors.
        //for last 5 digits, after taking out 5 and 2 factors, the product mod 100000 should get the last five digits
        //log(product) = log(left) + log(left+1) +.... log(right)
        //e^(sum(k = left to right )(ln(k))) -> approx first 5 digits with 
   
        double logSum = 0;
        double logSumB10 = 0;
        double logSumB2 = 0;
        double logSumB17 = 0;
        double logSumB3 = 0;
        for(int i = left; i <= right; i++) {
            double log = Math.log(i);
            logSum += log;
            logSumB10 += log/NATURAL_LOG_10;
            logSumB2 += log/NATURAL_LOG_2;
            logSumB17 += log/NATURAL_LOG_17;
            logSumB3 += log/NATURAL_LOG_3;
        }
        logSumB10 = (logSumB10 + logSum/NATURAL_LOG_10)/2;
        logSumB2 = (logSumB2 + logSum/NATURAL_LOG_2)/2;
        logSumB17 = (logSumB17 + logSum/NATURAL_LOG_17)/2;
        logSumB3 = (logSumB3 + logSum/NATURAL_LOG_3)/2;
        int twoFactors = 0;
        int fiveFactors = 0;

        for(int i = left; i <= right; i++) {
            int curr = i;
            while(curr % 2 == 0) {
                curr /= 2;
                twoFactors++;
            } 
            while(curr % 5 == 0) {
                curr /= 5;
                fiveFactors++;
            }
        }

        //each 10 needs 1 five and 1 two factor, so the amount of 10s = min(fiveFactors, twoFactors) 
        
        int trailingZeros = Math.min(fiveFactors, twoFactors);
        //for each trailiing zero, string number loses 1 place in length to abbrev, this is equivalent to the e^(logSum)/(10*trailingZeros) = e^(logSum - trailingZeros*ln(10)) -> so do logSum -= trailingZeros*ln(10)
        double log2Of10 = NATURAL_LOG_10/NATURAL_LOG_2;
        double log17of10 = NATURAL_LOG_10/NATURAL_LOG_17;
        double log3of10 = NATURAL_LOG_10/NATURAL_LOG_3;

        logSumB10 -= trailingZeros;
        logSum -= NATURAL_LOG_10*trailingZeros;
        logSumB2 -= trailingZeros*log2Of10;
        logSumB17 -= trailingZeros*log17of10;

        int fivesToIgnore = trailingZeros;
        int twosToIgnore = trailingZeros;

        //this means that the total product is < max for long values
        if(logSum <= 43.668) {
            long product = 1;
            for(long i = left; i <= right; i++) {
                long curr = i;
                while(curr % 5 == 0 && fivesToIgnore > 0) {
                    curr /= 5;
                    fivesToIgnore--;
                }
                while(curr % 2 == 0 && twosToIgnore > 0) {
                    curr /= 2;
                    twosToIgnore--;
                }
                product *= curr;
            }

            String num = String.valueOf(product);
            
            return (num.length() > 10 ? num.substring(0, 5) + "..." + num.substring(num.length()-5) : num) + "e" + trailingZeros;
        }

        

        /*e^logSum = product
        divide product by 10 until product is 5 digits, those are highest 5 digits
        e^(logSum)/(10^n) = 5 digits of product and following decimals
        10^n = e^(n*ln(10)) -> e^(logSum)/(10^n) = e^(logSum)/e^(n*ln(10)) = e^(logSum-n*ln(10))
        n is the integer that forces five digits.
        e^x is 5 digits when 10000 <= e^x < 100000 -> 10^4 <= e^x < 10^5 -> 4*ln(10) <= x < 5*ln(10)
        e^(logSum-n*ln(10)) -> where 4*ln(10) <= logSum-n*ln(10) < 5*ln(10) -> since only subtracting integer multiples of ln(10), exp should stay the same % ln(10)
        e^(logSum - n*ln(10)) = e^((logSum % ln(10)) + 4*ln(10))

        */
        double expTest = Math.exp((logSum % NATURAL_LOG_10) + 4.0*NATURAL_LOG_10);
        double expTestB10 = Math.pow(10, (logSumB10 % 1) + 4);
        double expTestB2 = Math.pow(2, (logSumB2 % log2Of10) + 4.0 * log2Of10);
        double expTestB17 = Math.pow(17, (logSumB17 % log17of10) + 4.0 * log17of10);
        double expTestB3 = Math.pow(3, (logSumB3 % log3of10) + 4.0*log3of10);

        int freq = 0;
        int val = Math.max(Math.max(Math.max((int)expTest, (int)expTestB10), Math.max((int)expTestB2, (int)expTestB17)), (int)expTestB3);
        if((int)expTest == val) freq++;
        if((int)expTestB10 == val) freq++;
        if((int)expTestB2 == val) freq++;
        if((int)expTestB17 == val) freq++;
        if((int)expTestB3 == val) freq++;
        freq %= 5; //if all of them are max, none surpass to next integer barrier, so freq is equivalent to 0

        //take average of both to make lessen the error of either base
        double expAVG = (expTest + expTestB10 + expTestB2 + expTestB17 + expTestB3)/5.0;

        String firstFiveDigits = String.valueOf((int)(ERR*freq + expAVG));
        
        long prodTest = 1l;
        

        long modProduct = 1l;
        long MOD = 100000l;

        for(int i = left; i <= right; i++) {
            int curr = i;
            while(curr % 5 == 0 && fivesToIgnore > 0) {
                curr /= 5;
                fivesToIgnore--;
            }
            while(curr % 2 == 0 && twosToIgnore > 0) {
                curr /= 2;
                twosToIgnore--;
            }
            modProduct = (modProduct * curr) % MOD;
            prodTest *= curr; 
            while(prodTest > MOD *10 * i) {
                prodTest /= 10;
            }
        }
        /*
        System.out.println(prodTest);
        System.out.println(expTest);
        System.out.println(expTestB10);
        System.out.println(expTestB2);
         System.out.println(expTestB17);
         System.out.println(expTestB3);
        System.out.println(expAVG);

*/
        String lastFiveDigits = String.valueOf(modProduct);
        while(lastFiveDigits.length() < 5) {//if leading zeros were cut off in string conversion, add them back
            lastFiveDigits = "0" + lastFiveDigits;
        }
        return firstFiveDigits + "..." + lastFiveDigits + "e" + trailingZeros;

        
        
        
    }
}