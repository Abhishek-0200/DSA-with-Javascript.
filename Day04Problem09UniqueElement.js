function UniqueElement(nums)
{
    let xor = 0;
    for(let i =0;i<nums.length;i++)
       {
           xor = xor^nums[i]
            // console.log(xor)
       }


    return xor;
}

console.log(UniqueElement([2,2,1]))