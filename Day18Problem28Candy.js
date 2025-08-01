/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let rating_array =[]
    for(let i =0;i<ratings.length;i++)
        rating_array.push(1);


    for(let i =0;i<ratings.length;i++)
    {
        if(ratings[i] >ratings[i-1] && i !== 0)
            {
                rating_array[i] = rating_array[i-1] +1;
            }
    }
    console.log(rating_array)
    for(let i =ratings.length-1; i>=0; i--)
    {
        if(ratings[i] > ratings[i+1] && i !== ratings.length -1)
        rating_array[i] = Math.max(rating_array[i+1] +1, rating_array[i]);
    }
    let result= 0;
    console.log(rating_array)
    for(let i=0;i< rating_array.length;i++)
        result+= rating_array[i]

    return result;
};

let ar = [4,4,4,4,4,4]
console.log(candy(ar));
