/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    if(k%2 === 0)
    {
        let j =Math.floor(nums.length/2-1);
        console.log(j)
        for(let i =nums.length-1; i>= k;i--)
        {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            j--;
        }
    }
    else{
        let j = nums.length/2-2;
        for(let i =nums.length-1;i>k;i--)
        {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            j--;
        }
        let temp = nums[k];
        nums[k] = nums[nums.length-1];
        nums[nums.length -1] = temp; 

    }
    console.log(nums)

};


let arr= [-1,-100, 3,99 ,5];
rotate(arr,2)