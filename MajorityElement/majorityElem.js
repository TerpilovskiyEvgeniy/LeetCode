const majorityElement =  (nums) => {
    nums.sort((a,b) => a-b)
    return nums[Math.floor(nums.length/2)]
}
console.log(majorityElement([3,2,3,2,2]))