/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let pushArr= []
  let map = new Map();
  map.set("(" , ")")
  map.set("[" , "]")
  map.set("{" , "}")
  for(let i =0;i< s.length;i++)
  {
    if(s[i] === "(" || s[i] === "[" || s[i] === "{")
     {
        pushArr.push(s[i])

     }
     else
     {
        console.log(map.get(pushArr[pushArr.length -1]))
            if((s[i] === map.get(pushArr[pushArr.length -1])) && pushArr.length !== 0 )
             {
                pushArr.pop();
                console.log(pushArr)
             }
             else
             return false;
       
     }

  }
  if(pushArr.length !== 0)
  return false;
return true;
};


let s = "{[()]"
console.log(isValid(s))