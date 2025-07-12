/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0]
    let profit = 0;
    for(let i = 1; i< prices.length; i++)
    {
        let currentPrice = prices[i];
        if(min > currentPrice)
         min = currentPrice;
         else{
            const maxProfit = currentPrice - min;
            if( maxProfit > profit)
            profit = maxProfit;
         }
    }
    return profit;
};

let arr = [7,1,5,3,6,4]
console.log(maxProfit(arr))