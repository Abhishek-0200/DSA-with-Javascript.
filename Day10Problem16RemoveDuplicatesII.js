/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count =2;

    for(let i =2;i< nums.length;i++)
    {
        if(nums[count-2] != nums[i])
            nums[count++] = nums[i]
    };
    console.log(nums)
return count;
}


let nums =[1,2]

console.log(removeDuplicates(nums))