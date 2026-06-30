/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
     let min= Math.min(...nums);
    let max = Math.max(...nums);
    return (gcd(min,max))
    function gcd(min,max){
        if(max==0) return min
        return gcd(max,min%max)
    }
};