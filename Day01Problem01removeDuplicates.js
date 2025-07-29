/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   if(nums.length == 0)
//   return 0;
//   let k = nums.length;
//   let count = 0;
//   for(let i =1;i <k;i++)
//   {
//     if(nums[count] != nums[i])
//     {
//         count++;
//         console.log("entered with : " + nums[count] + nums[i])
//         nums[count] = nums[i]
//     }
//   }
//    return  count+1;

// };


var removeDuplicates = function(nums) {
    let count = 0;
    for(let i =0;i<nums.length;i++)
    {
        if(nums[i] !== nums[i+1])
        {
            nums[count++] = nums[i];
            
        }
    }
    console.log(nums)
    return count;
};

let arr= [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(arr));
