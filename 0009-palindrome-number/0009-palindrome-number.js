/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let cp=x;
    let rev=0;
    if(x<0) return false;
    while(x!=0){
        let a= x%10;
        rev=rev*10+a;
        x=Math.floor(x/10);
    }
    if(cp==rev){
        return true
    }else{
        return false
    }
    
};