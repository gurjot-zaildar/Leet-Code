/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n=height.length
    let left=new Array(n)
    let right=new Array(n)
    let maxleft=height[0]
    let maxright=height[n-1]

    left[0]=height[0]
    for(let i=1;i<n;i++){
        maxleft= Math.max(maxleft,height[i])
        left[i]=maxleft;
    }

    right[n-1]=height[n-1]
      for(let i=n-2;i>=0;i--){
        maxright= Math.max(maxright,height[i])
        right[i]=maxright;
    }

    let ans=0;

    for(let i=0;i<n;i++){
        ans+= Math.min(left[i],right[i]) - height[i]
    }
    
    return ans;

};