/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let j=nums.length-1;
    let k =0;

    for(let i=0;i<nums.length;i++){
        if(i<=j){
        if(nums[i]==0){
            let temp = nums[i];
            nums[i]=nums[k];
            nums[k]=temp
            k++
        } 
        if(nums[i]==2){
            let temp = nums[i]
            nums[i]=nums[j]
            nums[j]=temp
            j--
            i--
        }
        }
    }
};