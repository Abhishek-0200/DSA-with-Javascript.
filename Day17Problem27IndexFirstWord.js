/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let index = -1;
    let word =""
    for(let i =0;i<haystack.length;i++)
    {
        if(needle[0] == haystack[i])
        {
            index = i;
            // console.log(index)
            let k =i+1;
            for(let j =1; j<needle.length;j++)
                {
                    console.log(j)
                    if(needle[j] != haystack[k])
                        {
                            index = -1;
                            
                            break;
                        }
                        k++;
                        
                        if(j >= needle.length-1)
                            return index;
            }
           
        }
    }
    return index;
};

console.log(strStr("aaaaa","a"));




// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestSubarray = function(nums) {
//    let max = Math.max(...nums);
//    let maximumLength = 0;
//    for(let i =0;i<nums.length;i++)
//    {
//     if(nums[i] < max) continue;

//     if(nums[i] === max)
//     {
//         let j = i;
//         while(nums[j] === max && j < nums.length)
//         {
//             j++;
//             if(maximumLength < (j-i))
//               maximumLength = j-i;
//         }

//     }
//    }
//    return maximumLength;
// };