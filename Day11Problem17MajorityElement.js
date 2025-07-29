// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function(nums) {
//     let map = new Map();

//     for(let i =0;i<nums.length;i++)
//     {
//         map.set(nums[i] , (map.get(nums[i]) || 0) +1)
//     }
//     let max = -Infinity;
//     let max_key;
//     for(let [key , values] of map.entries() )
//     {
//         if(values > max)
//             {
//                 max = values;
//                 max_key = key;
//             }
//     }
//     return max_key;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();

    for(let i =0;i<nums.length;i++)
    {
        map.set(nums[i] , (map.get(nums[i]) || 0) +1)
    }
 
    let max=  [...map.entries()].reduce((a,b) => b[1]> a[1] ? b: a);
    return max[1]
};


let arr= [3,2,2,2,3,1,1,1,1,1];
let result = majorityElement(arr);
console.log(result)