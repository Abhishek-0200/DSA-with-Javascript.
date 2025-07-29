/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  if (s.length === 0) return "";

  s = s.trim();

  let i = s.length-1;
  let count = 0;
  let result = "";
  while (i >= 0) {
    if (s[i] !== " ") {
      count++;
        } else {
      
        let j = i + 1;
        console.log(s[j])
        while (count > 0) {
          result += s[j];
          j++;
          count--;
      
      }
      if(s[i] !== " ")
        result+=" "
      
      
    }
    i--;
  }
  return result;
};

let s = "a good   example";

console.log(reverseWords(s));
