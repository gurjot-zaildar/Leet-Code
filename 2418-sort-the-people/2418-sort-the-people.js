/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let map = new Map();

    for(let i=0;i<names.length;i++){
        map.set(heights[i],names[i])
    }

    let ans = new Array(names.length);

    heights.sort((a,b)=>b-a);

     for(let i=0;i<names.length;i++){
        ans[i]=map.get(heights[i])
    }
    return ans;
};