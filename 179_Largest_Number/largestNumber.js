const largestNumber = (nums) => {
    nums.sort((a,b) => `${b}${a}` - `${a}${b}`);
    if (nums[0] === 0 || !nums || nums.length === 0){
        return 0
    }
    return nums.join("")
};
console.log(largestNumber([3,30,34,5,9]))