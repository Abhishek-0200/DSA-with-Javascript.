/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let min = prices[0]
//     let profit = 0;
//     for(let i = 1; i< prices.length; i++)
//     {
//         let currentPrice = prices[i];
//         if(min > currentPrice)
//          min = currentPrice;
//          else{
//             const maxProfit = currentPrice - min;
//             if( maxProfit > profit)
//             profit = maxProfit;
//          }
//     }
//     return profit;
// };

var maxProfit = function(prices) {
    
    let min = prices[0];
    let profit =0;
    for(let i =1;i<prices.length;i++)
    {
        console.log(min)
        let current = prices[i];
        
        if(min > current)
            min = current;
        else{
            const currProfit = current -min;
            if(currProfit > profit)
                profit = currProfit;
        }
    }
    return profit;
};



// var maxProfit = function(prices) {
    
//    let profit = 0;
//    for(let i =0;i<prices.length-1;i++)
//    {
//     for(let j= i+1;j<prices.length;j++)
//     {
//         if(prices[j] > prices[i])
//         {
//             const currProfit = prices[j] - prices[i]
//             if(currProfit> profit)
//                 profit = currProfit;
//         }
//     }
//    }
//    return profit;
// };



let arr = [7,1,5,3,6,4]
console.log(maxProfit(arr))