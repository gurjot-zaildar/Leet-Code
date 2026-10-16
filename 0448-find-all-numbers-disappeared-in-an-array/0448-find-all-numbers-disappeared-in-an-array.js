/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n = nums.length;
    let result = [];
    let set = new Set(nums)

    for(let i=1;i<=n;i++){
        if(!set.has(i)){
        result.push(i)
        }
    }
    return result;
};