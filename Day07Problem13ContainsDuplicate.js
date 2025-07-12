// var func = function (nums) {
//     for(let i=0;i<nums.length; i++)
//     {
//         for(let j = i+1;j < nums.length;j++)
//         {
//             if(nums[i] === nums[j])
//                 return true;
//         }
//     }
//     return false;
// }

var func = function (nums)
{
    let set = new Set();
    set.add(nums[0])
    console.log(set)
    for(let i =1;i< nums.length;i++)
    {
        if(set.has(nums[i]))
            return true;
        set.add(nums[i])
    }
    return false; 
}



console.log(func([1,2,3,4,1]))



/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
    
//     let new_nums = []
//     new_nums.push(nums[0])
//     for(let i =1;i<nums.length;i++)
//     {
//         if(new_nums.includes(nums[i]))
//             return true;
//         else
//         {
//             new_nums.push(nums[i]);
//         }
//     }
//     return false;

// };


