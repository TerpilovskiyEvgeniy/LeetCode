const rotate = (nums,k) => {
    return nums.unshift(...nums.splice(-k % nums.length));
}
console.log(rotate([1,2,3,4,5,6,7],3))