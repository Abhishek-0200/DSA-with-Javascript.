/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function(basket1, basket2) {
    
    let freq1 = new Map();
let freq2 = new Map();

let map = new Map();
    for(let item of basket1)
       map.set(item , (map.get(item) || 0) +1)
    for(let item of basket2)
       map.set(item , (map.get(item) || 0) +1)
    
    for(let [key ,value] of map.entries())
    {
        if(value %2 !== 0)
            return -1;
    }


for (let item of basket1) freq1.set(item, (freq1.get(item) || 0) + 1);
for (let item of basket2) freq2.set(item, (freq2.get(item) || 0) + 1);

let toSwap = [];

for (let [key, total] of map.entries()) {
    let count1 = freq1.get(key) || 0;
    let count2 = freq2.get(key) || 0;

    // If more in basket1, need to move to basket2
    if (count1 > count2) {
        let diff = (count1 - count2) / 2;
        for (let i = 0; i < diff; i++) toSwap.push(key);
    }
    // Else if more in basket2, move to basket1
    else if (count2 > count1) {
        let diff = (count2 - count1) / 2;
        for (let i = 0; i < diff; i++) toSwap.push(key);
    }
    let minvalue = Infinity;
    for(let i =0;i<toSwap.length;i++)
        minvalue = Math.min(minvalue, toSwap[i])
    return minvalue;
}


};


let arr1 = [1,2,3]
let arr2 = [2,1,3];

console.log(minCost(arr1, arr2))