/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let ans = [];

    for (let i=0; i<prices.length; i++) {
        let isDiscount = false;
        for (let j=i+1; j<prices.length; j++) {
            if (prices[i] < prices[j]) continue;

            isDiscount = true;
            ans.push(prices[i] - prices[j]);
            break;
        }

        if (!isDiscount) ans.push(prices[i]);
    }

    return ans;
};