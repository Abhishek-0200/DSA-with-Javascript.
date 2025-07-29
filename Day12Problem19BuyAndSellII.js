var maxProfit = function(prices) {
// let maximum = 0;
// let starting = prices[0];
// for(let i =1;i <prices.length;i++)
// {
//     let current = prices[i];
//     if(starting > current)
//     {
//         starting = current;
//     }
//     else{
//         let currProfit = current -starting;
//         starting = prices[i+1];
//         i+=1;
//         maximum += currProfit;

//     }
// }
    
let profit = 0;
for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
        profit += prices[i] - prices[i - 1];
    }
}

  return profit
};

let prices = [3, 8, 2, 5, 1, 7]

;

console.log(maxProfit(prices))
