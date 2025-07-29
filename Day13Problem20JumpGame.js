var canJump = function(nums) {
    if (nums.length === 1) return true;
    if (nums[0] === 0) return false;

    let i = 0;
    while (i < nums.length) {
        if (i + nums[i] >= nums.length - 1) return true;

        if (nums[i + nums[i]] !== 0) {
            i = i + nums[i];
        } else {
            let j = i + nums[i] - 1;
            let found = false;
            console.log(i , j)
            while (j >= 0) {
                if (nums[j] + j > i + nums[i]) {
                    i = j;
                    found = true;
                    break;
                }
                j--;
            }
            if (!found) return false;
        }
    }
};

let arr =[2,3,1,0,4]
console.log(canJump(arr))
