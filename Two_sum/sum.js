const twoSum = (nums, target) => {
let hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashTable[target - nums[i]] !== undefined){
            return [hashTable[target - nums[i]], i]
        }
        hashTable[nums[i]] = i;
    }
}
console.log(twoSum([3,2,4],6))