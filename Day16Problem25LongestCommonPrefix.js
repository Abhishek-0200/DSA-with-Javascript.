/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//     let previous = strs[0];
//     let common_str = ""
//     for(let i =1;i<strs.length;i++)
//     {
//         let current = strs[i];
//         common_str = ""
//         for(let j = 0;j<current.length;j++)
//         {

//             if(current[j] == previous[j])
//                 common_str += current[j];
//             else
//                 break;
            
        

//         }
//         previous = common_str;
//     }
//     return previous
// };




// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) return "";
//     if (strs.length === 1) return strs[0];

//     let previous = strs[0];
//     let common_str = "";

//     for (let i = 1; i < strs.length; i++) {
//         let current = strs[i];
//         common_str = "";

//         for (let j = 0; j < Math.min(current.length, previous.length); j++) {
//             if (current[j] === previous[j])
//                 common_str += current[j];
//             else
//                 break;
//         }

//         previous = common_str;
//         if (common_str === "") break;
//     }

//     return common_str;
// };


var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }

    return prefix;
};


// let strs = ["flower","flow","flight"]
let strs = ["cir","car"]
// let strs = ["interview", "internet", "internal"]




console.log(longestCommonPrefix(strs))