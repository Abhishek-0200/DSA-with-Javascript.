/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let i =0;
    let j = numbers.length-1;
    console.log(j)
    while(i<=j )
    {
        // console.log(j, i )
        if(numbers[i] + numbers[j] === target)
                return [i+1,j+1]
        if(numbers[i] + numbers[j] > target)
            j--;
        else
            i++;
    }

};

let numbers = [0,0,3,4]
 let target = 0

console.log(twoSum(numbers, target))