/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    let ans = [-1,-1];
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            ans[0]=i;
            ans[1]=map.get(target-nums[i]);
            return ans;
        }else{
            map.set(nums[i],i)
        }
    }

    
};