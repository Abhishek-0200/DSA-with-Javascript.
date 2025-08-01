/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    if(numRows === 1 || s.length <= numRows) return s;
    let rows  = new Array(numRows).fill("")
    let currentRow = 0;
    let directionUpward = false;
    for(let i =0;i< s.length; i++)
    {
        rows[currentRow] += s[i];
        if(currentRow === 0 || currentRow === numRows -1)
            directionUpward  = !directionUpward;

        currentRow = currentRow + (directionUpward ? 1: -1);

    }
    console.log(rows)

    return rows.join("");


};


console.log(

    convert("PAHNAPLSIIGYIR",3)
)