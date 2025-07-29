/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {

    if(citations[0]  !== 0 && citations.length == 1) return 1;
    if(citations.length === 1 && citations[0] === 0) return 0;

  citations.sort((a,b) => b-a);
  console.log(citations)
    let count =0;
    for(let i =0;i<citations.length;i++)
    {
        if(citations[i] >= i+1)
            count++;
        else
           return count;
    }
    return count;
    
};

let arr = [11,15]
console.log(hIndex(arr))