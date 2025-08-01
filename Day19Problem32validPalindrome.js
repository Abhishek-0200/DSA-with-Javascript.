/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
  
//     s = s.toLowerCase();
//     let new_string = ""
//     let result = "";
//     for(let i =0; i<s.length;i++)
//         if((s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <=122) || (s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <=57) )
//             new_string+=s[i];
//     for(let i = new_string.length-1; i>=0;i--)
//         result +=new_string[i];
//     return result === new_string ? true : false;
// };

var isPalindrome = function(s) {
    s = s.toLowerCase();
    let left = 0, right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphaNum(s[left])) left++;
        while (left < right && !isAlphaNum(s[right])) right--;

        if (s[left] !== s[right]) return false;

        left++;
        right--;
    }

    return true;
};

function isAlphaNum(c) {
    let code = c.charCodeAt(0);
    return (code >= 48 && code <= 57) || // 0-9
           (code >= 97 && code <= 122); // a-z
}


console.log(isPalindrome("0P"))
