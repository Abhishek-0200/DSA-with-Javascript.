var jump = function(nums) {
    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        // Track the farthest index reachable
            if(farthest < nums[i] +i)
                farthest = nums[i] +i;
        // When we reach the end of the current jump range
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }

    return jumps;
};


let arr = [3,2,2,0,4]
console.log(jump(arr))