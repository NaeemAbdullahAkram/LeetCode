class Solution {
public:
    int minimizeXor(int num1, int num2) {
        // Initialize result with num1
        int result = num1;

        // Count the number of set bits (1s) in num2
        int setbits = 0;
        while(num2 > 0) {
            num2 = num2 & (num2 - 1); // Remove the least significant set bit
            setbits++;
        }

        // Count the number of set bits in result (num1)
        int temp = result;
        int sb = 0;
        while(temp > 0) {
            temp = temp & (temp - 1); // Remove the least significant set bit
            sb++;
        }

        // If the number of set bits in result is greater than the set bits in num2
        if(sb > setbits) {
            int sbtr = sb - setbits; // Number of extra set bits to remove
            while(sbtr-- > 0) {
                result = result & (result - 1); // Remove the least significant set bit
            }
        } 
        // If the number of set bits in result is less than the set bits in num2
        else if(sb < setbits) {
            int sbta = setbits - sb; // Number of set bits to add
            for(int i = 0; i < 32; i++) {
                if(sbta == 0) break; // Stop once the required bits are added

                // If the current bit is 0, set it
                if((result & (1 << i)) == 0) {
                    result = result | (1 << i); // Set the bit at position i
                    sbta--;
                }
            }
        }

        return result; // Return the minimized XOR value
    }
};