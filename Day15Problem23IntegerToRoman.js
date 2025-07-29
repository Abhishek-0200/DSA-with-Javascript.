/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanMap = [
    [1000, "M"], [900, "CM"],
    [500, "D"],  [400, "CD"],
    [100, "C"],  [90, "XC"],
    [50, "L"],   [40, "XL"],
    [10, "X"],   [9, "IX"],
    [5, "V"],    [4, "IV"],
    [1, "I"]
  ];
  result = ""
    for( let [value , symbol] of romanMap) {
        if(num >= value) {
            console.log(value);
            result+=symbol;
            num-=value;
        }
    }
return result;
};

let num = 1983;
console.log(intToRoman(num))