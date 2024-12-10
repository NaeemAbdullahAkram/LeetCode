class Solution {
    fun closestPrimes(left: Int, right: Int): IntArray {
        if (right < 2 || left >= right) {
           return intArrayOf(-1, -1)  
        }

        // Initializing a BooleanArray of size 'right' with all elements as true
        val isPrime = BooleanArray(right + 1) { true }
        
        // Modifying boolean value at indexes 0 & 1 as false as they are neither prime nor composite
        isPrime[0] = false
        isPrime[1] = false

        // Sieve of Eratosthenes
        val initialIndex: Int = 2
        val finalIndex: Int = Math.sqrt(right.toDouble()).toInt()
        for (i in initialIndex..finalIndex) {
            if (isPrime[i]) {
                for (j in i * i..right step i) {
                    isPrime[j] = false
                }
            }
        }

        // Initialize with the first prime number we find.
        var minDiff = Int.MAX_VALUE
        var firstItem = -1
        var secondItem = -1

        for (i in left..right) {
            if (isPrime[i]) {
                if (firstItem != -1) { 
                    // Found a previous prime
                    if (i - firstItem < minDiff) {
                        minDiff = i - firstItem
                        secondItem = i
                    }
                }
                // Updating firstItem to be the last found prime
                firstItem = i 
            }
        }

        if (secondItem == -1){
            // No pairs found
           return intArrayOf(-1, -1) 
        } 
        return intArrayOf(secondItem - minDiff, secondItem)
    }
}