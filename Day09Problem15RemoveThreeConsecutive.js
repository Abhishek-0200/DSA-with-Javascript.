/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let arr = s.split("");
    let l = arr.length;
    for(let i =0;i<l;i++)
    {
        console.log(arr)
        if(arr[i] == arr[i+1] && arr[i] == arr[i+2])
            arr.splice(i,1);

    }
    return arr.join("");
};


let s  = "aaabaaaa";
console.log(makeFancyString(s));