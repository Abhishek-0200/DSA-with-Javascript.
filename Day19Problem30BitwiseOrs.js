/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
  
    if(arr.length === 0)
        return 0;
    if(arr.length ===1 )
        return 1;
    let resultSet = new Set();
    i = 0;
    while(i <= arr.length-1)
    {   
        let j = i;
        let or = 0;
        for(j;j<arr.length;j++)
        {
            or |= arr[j];
            resultSet.add(or);
        }
        i++;
    }
    return resultSet.size;
    
    

};

let arr = [1,1,2];

console.log(subarrayBitwiseORs(arr))