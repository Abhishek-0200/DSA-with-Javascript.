// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     class num{
//         constructor(i , val)
//         {
//             this.index = i;
//             this.value = val;
//         }
//     }

//     for(let i =0;i< nums.length;i++)
//         {
//             let ele = new num(i, nums[i]);
//             nums[i] = ele;
//         }
        
    
//       nums.sort((a,b) => a.value -b.value);
      
//       let i = 0;
//       let j = nums.length-1;
      
//       while(j> i){
//         if(nums[i].value +nums[j].value == target) 
//         {
//             return  [nums[i].index, nums[j].index].sort();
//         }
//         if(nums[i].value +nums[j].value > target)
//         {
//             j--;
//         }
//         else
//         {
//             i++; 

//         }
        
//       }

// };


var twoSum = function (nums, target){
    let map  = new Map();

    for(let i =0;i<nums.length;i++)
    {
        let diff = target - nums[i];
        if(map.has(diff))
        {
            return [ map.get(diff), i]
        }
        map.set(nums[i],  i);

    }
}



let nums = [7,4,3];
console.log(twoSum(nums,7)) ;