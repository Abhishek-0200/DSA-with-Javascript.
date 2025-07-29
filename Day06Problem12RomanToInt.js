// var romanToInt = function (s){

//     let defintion = new Map();
//     defintion.set("I", 1);
//     defintion.set("V", 5);
//     defintion.set("X" ,10)
//     defintion.set("L",50)
//     defintion.set("C", 100)
//     defintion.set("D",500)
//     defintion.set("M", 1000);
//     let result  =  defintion.get(s[s.length-1]);
//     let prev_value = result;
//     let current_value= 0;
//     for(let i =s.length-2;i>=0; i--)
//     {

//             current_value = defintion.get(s[i]);

//             if(current_value > prev_value)
//                 {
//                     result += current_value ;

//                 }

//                 else
//                 {
//                     result -=current_value;
//                 }
//                 prev_value = current_value;
//         }
//     return result;
// }

// for(let i =0; i<4000; i++)
// {

// }

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let total = 0;
  let map = new Map();
  let values = [
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ];
  values.map((I) => {
    map.set(I[0], I[1]);
  });
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (current == "I") {
      if (s[i + 1] === "V" || s[i + 1] === "X") {
        total += map.get(s[i + 1]) - 1;
        i++;
      } else {
        total += map.get(current);
      }
    } else if (current == "X") {
      if (s[i + 1] === "L" || s[i + 1] === "C") {
          total += map.get(s[i + 1]) - 10;
          i++;
      } else {
        total += map.get(current);
      }
    } else if (current == "C") {
      if (s[i + 1] === "D" || s[i + 1] === "M") {
          total += map.get(s[i + 1]) - 100;
          i++;
      } else {
        total += map.get(current);
      }
    } else {
      total += map.get(current);
    }

   
  }

  return total;
};

let str = "MMMDCCXLIX";

console.log(romanToInt(str));
