/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//     let left_max = []
//     left_max[0] = height[0]
//     let rigth_max = []
//     rigth_max[height.length-1] = height[height.length-1];
//     let j = height.length-2;
//     for(let i =1;i<height.length;i++)
//     {

//         if(left_max[i-1] > height[i])
//             left_max[i] = left_max[i-1]
//         else
//             left_max[i] = height[i];
        
//         if(rigth_max[j+1] > height[j])
//             rigth_max[j] = rigth_max[j+1]
//         else 
//             rigth_max[j] = height[j]
//         j--;
//     }
//     let result = 0;
//     for(let i=0;i<height.length;i++)
//     {
//         result+= Math.min(left_max[i], rigth_max[i]) -height[i]
//     }

//     return result;
//     }
var trap = function(height) {
    let left = 0, right = height.length - 1;
    let left_max = 0, right_max = 0;
    let result = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= left_max) {
                left_max = height[left];
            } else {
                result += left_max - height[left];
            }
            left++;
        } else {
            if (height[right] >= right_max) {
                right_max = height[right];
            } else {
                result += right_max - height[right];
            }
            right--;
        }
    }

    return result;
};



let arr = [4,2,0,3,2,5];
console.log( trap(arr));