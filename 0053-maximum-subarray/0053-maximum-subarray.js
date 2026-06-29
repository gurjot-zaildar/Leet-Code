/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum=0;
    let maxsum=nums[0];

    if(nums.length==1){
        return maxsum=nums[0]
    }

    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(sum>maxsum){
            maxsum=sum;
        }
        if(sum<0){
            sum=0;
        }
    }
    return maxsum;
};