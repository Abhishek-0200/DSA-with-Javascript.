// var Pascal = function (numsRow){
//     if(numsRow== 1)
//         return [[1]]
//     if(numsRow == 2)
//         return [[1],[1,1]]
    
//     let nums = [[1],[1,1]];

    
//     console.log(nums)
// }

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0)
        return []
    if(numRows ===1 )
    return [[1]]
    if(numRows === 2)
    return [[1],[1,1]]
    let output = [[1],[1,1]];
    let curr = output[1]
    for(let i=2;i<numRows;i++)
{
    let curr= []
    for(let j=0;j<i+1; j++ )
    {
        if(j === 0 || j === i)
            curr[j] = 1;
        else
        {
            let ele =output[i-1][j-1] + output[i-1][j];
            curr[j] = ele; 
        }
    }
    output.push(curr);

}
return output;
};

let n = 5;

console.log(generate(0));