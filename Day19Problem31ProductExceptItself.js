// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function(nums) {
    
//     let zeroTrue = false;
//     let allProductResult = 1;
//     for(let i =0;i<nums.length;i++)
//     {
//         if(nums[i] === 0)
//         {
//             zeroTrue = true;
//             continue
//         }
//         allProductResult*=nums[i];

//     }
//     console.log(allProductResult)

//     let output =[]
//     for(let i =0;i<nums.length;i++)
//     {
//         if(zeroTrue)
//             if(nums[i] != 0)
//                 output[i] = 0;
//             else
//                 output[i] = allProductResult
//         else
//             output[i] = allProductResult/nums[i]
//     }

//     return output;
    
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = 1;
    let output =  new Array(nums.length).fill(1);


    for(let i =0;i<nums.length;i++)
    {
        output[i] = prefix;
        prefix *= nums[i];

    }
    suffix = 1;
    for(let i = nums.length-1; i>=0;i--)
    {
        output[i] *=suffix;
        suffix *= nums[i];
    }

    return output;
};


console.log(productExceptSelf([1,2,3]));