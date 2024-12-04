/**
 * @param {number} l
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
var numberOfBeautifulIntegers = function(l, r, k) {
    // Using Map of 6 state's string for memoization
    let dp = new Map();
    
    const rec = (s, i, tight, l, even, odd, remainder) => {
        // Base case: Check divisibility and parity counts when we reach the end of the string
        if (i >= s.length) return (remainder === 0) && (even === odd) ? 1 : 0;
        
        // Create state string for memoization
        const state = `${i},${tight},${l},${even},${odd},${remainder}`;
        
        // Memoization
        if (dp.has(state)) return dp.get(state);
        
        // Set the limit for the current digit based on the tight condition
        const lmt = tight ? parseInt(s[i]) : 9;
        let ans = 0;
        
        // Iterate over all possible digits for the current position
        for (let dig = 0; dig <= lmt; dig++) {
            // Recursive call with updated parameters:
            ans += rec(
                s,
                i + 1,                                            // Traverse to next digit state
                tight && (dig === lmt),                          // Update tight if digit matches the limit
                l && (dig === 0),                                // Stay in leading zero phase if dig is 0
                even + (dig === 0 ? !l : !(dig & 1)),           // Update even count if dig is even (non-leading 0)
                odd + (dig & 1),                                 // Update odd count if dig is odd
                ((Math.pow(10, s.length - i - 1) * dig) + remainder) % k // Update remainder
            );
        }
        
        // Caching
        dp.set(state, ans);
        return ans;
    };
    
    // Calculate beautiful numbers from 1 to l-1
    let s = (l - 1).toString();
    dp.clear();
    const ansl = rec(s, 0, 1, 1, 0, 0, 0);
    
    // Calculate beautiful numbers from 1 to r
    s = r.toString();
    dp.clear();
    return rec(s, 0, 1, 1, 0, 0, 0) - ansl;
};