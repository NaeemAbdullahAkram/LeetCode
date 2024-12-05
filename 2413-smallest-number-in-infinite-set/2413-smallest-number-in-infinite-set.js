
var SmallestInfiniteSet = function() {
    this.current = 1;
    this.poppedNumbers = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    while (this.poppedNumbers.has(this.current)) {
        this.current++;
    }
    this.poppedNumbers.add(this.current);
    return this.current++;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (this.poppedNumbers.has(num)) {
        this.poppedNumbers.delete(num);
        if (num < this.current) {
            this.current = num;
        }
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */