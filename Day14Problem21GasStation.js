/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let total =0 , start = 0, tank = 0;
    for(let i =0;i<gas.length;i++)
      {
      total = total + gas[i] -cost[i];
      tank = tank + gas[i] -cost[i];
      if(tank  <0)
      {
        start = i+1;
        tank =0;

      }

      }
     return  total < 0 ? -1: start;
};

let gas =[1,2,3,4,5];
let cost= [3,4,5,1,2];
