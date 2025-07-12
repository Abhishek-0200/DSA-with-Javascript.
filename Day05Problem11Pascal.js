var Pascal = function (numsRow){
    let nums = [[1],[1,1]];
    for(let i = 2;i<numsRow;i++)
    {
        let num = []
      for(let j = 0;j <= i;j++)
      {
        if(j == 0 || j == i)
        { 
            num.push(1)
        }
        else
        num[j] = nums[i-1][j-1] +  nums[i-1][j];
    }
    nums.push(num) 
}

    console.log(nums)
}


let n = 5;

Pascal(n);