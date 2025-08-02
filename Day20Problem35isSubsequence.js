/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    let len = t.length;
    let i =0;
    let j = 0;
    while(i<len)
    {   j =0;
        if(t[i] ===s[j])
        {
            let k =i+1;
            j++;
            while(k< len)
            {
                console.log(k, j)
                if(t[k] === s[j])
                {
                    j++;
                    
                }
                k++;


                                
                
            }
            if(j == s.length)
                return true

            
            
        }
        i++;

    }
    return  false;
};


console.log(isSubsequence("axc","ahbgdc" ))