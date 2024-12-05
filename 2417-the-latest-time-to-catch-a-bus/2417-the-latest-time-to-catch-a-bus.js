/**
 * @param {number[]} buses
 * @param {number[]} passengers
 * @param {number} capacity
 * @return {number}
 */
var latestTimeCatchTheBus = function(buses, passengers, capacity) {
    buses.sort((a, b) => a - b);
    passengers.sort((a, b) => a - b);
    
    let p = 0;
    
    for (let b = 0; b < buses.length; b++) {
        let c = 0;
        
        while(p < passengers.length && passengers[p] <= buses[b] && c < capacity) {
            p++;
            c++;
        }
        
        if (b === buses.length - 1) {
            let t;
            if (c === capacity) {
                t = passengers[--p] - 1;
                while (p > 0 && passengers[--p] === t) {
                    t--;
                }
                return t;
            }
            t = buses[b];
            while (p > 0 && passengers[--p] === t) {
                t--;
            }
            return t;
        }
    }
    
    return -1;
};