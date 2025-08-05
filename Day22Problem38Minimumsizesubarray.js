/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let left =0;
    let right =0;
    let min_window = Infinity;
    for(right; right< nums.length;right++)
    {
        sum += nums[right];
        while(sum>= target) {
            min_window = Math.min(min_window , right -left +1);
            sum -= nums[left];
            left++;
        }
    }
    return min_window === Infinity ? 0: min_window;
};