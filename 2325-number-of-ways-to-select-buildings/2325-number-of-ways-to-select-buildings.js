/**
 * @param {string} s
 * @return {number}
 */
const numberOfWays = s => {
    let zeroBefore = new Array(s.length).fill(0)
    let zeroAfter = new Array(s.length).fill(0)
    
    // Calculate number of zero before index
    for (let i = 1; i < s.length; i++) {
        zeroBefore[i] = (zeroBefore[i - 1] + (s[i - 1] === '0' ? 1 : 0))
    }
    
    // Calculate number of zero after index
    for (let i = s.length - 2; i >= 0; i--) {
        zeroAfter[i] = (zeroAfter[i + 1] + (s[i + 1] === '0' ? 1 : 0))
    }
    
    let valid = 0
    
    for (let i = 1; i < s.length - 1; i++) {
        if (s[i] === '0') {
            // Current number is 0 we need to find number of one before and after this number
            
            // if number of zero before is i. It mean all of the numbers we see now are 0. 
            // It is impossible to have a valid way selecting building with middle building is current building
            if (zeroBefore[i] === i) continue
            else {
                // i - zeroBefore[i] is number of one before
                // s.length - i - 1 - zeroAfter[i] is number of one after as 
                //   s.length - i - 1 is all the numbers / buildings from i
                //   zeroAfter[i] is number of zero after i 
                valid += (i - zeroBefore[i]) * (s.length - i - 1 - zeroAfter[i])
            }
        } else {
            // Current number is 1 we need to find number of zero before and after this number
            
            // if number of zero before is 0. It mean all of the numbers we see now are 1. 
            // It is impossible to have a valid way selecting building with middle building is current building
            if (zeroBefore[i] === 0) continue
            else {
                // Valid ways is calculated by multiply number of zero before and after
                valid += zeroBefore[i] * zeroAfter[i]
            }
        }
    }
    
    return valid
};