/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length
const max = Math.max(...nums)
const range = [];
let result = null
for(i=0;i<=n;i++){
range.push(i)
}
for(let value of range){
    if(!nums.includes(value)){
      result = value;
      break;
    }
    
}
return result
};