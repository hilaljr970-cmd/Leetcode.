/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr=[];
    nums.sort((a,b)=>a-b);
    while(nums.length>0){
        let alice = nums.shift();
        let bob = nums.shift();
        if(bob!==undefined) arr.push(bob);
        if(alice!==undefined) arr.push(alice);
    }
    return arr;
};