/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {

   let count =0;
   let i =0;
   picked = []
    for(i;i<fruits.length;i++)
    {
        while(count<baskets.length)
        {
            if(fruits[i] <= baskets[count])
              {
                {
                    if(!picked.includes(count))
                    {
                        picked.push(count);
                        count = 0;
                        break;
                    }
                }


              }
                count++;
        }
  
    }

    return  baskets.length - picked.length;
    


};


let fruits = [3,6,1];
let baskets = [6,4,7];

console.log(numOfUnplacedFruits(fruits,baskets))