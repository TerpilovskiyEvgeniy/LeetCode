const maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let sum = 0
    while (left !== right){
        sum = Math.max(sum,Math.min(height[left],height[right]) * (right - left));
        height[left] <= height[right] ? left++ : right--;
    }
    return sum
}
console.log(maxArea([1,1]))