const moveZeroes = (nums) => {
    let left = 0;
    let right = 0;
        while (left < nums.length){
            if (nums[left] !== 0){
                [nums[left],nums[right]] = [nums[right],nums[left]];
                right++
            }
            left++
        }
    return nums
}
console.log(moveZeroes([0,1,0,3,12]))