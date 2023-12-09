var containsDuplicate = function(nums) {
    const newNums = [...new Set(nums)];
    return  nums.length !== newNums.length;
}
console.log(containsDuplicate([1,2,3,4]))