var rob = function (nums) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2) {
            sumOdd = Math.max(sumOdd + nums[i], sumEven)
        } else {
            sumEven = Math.max(sumEven + nums[i], sumOdd);
        }
    }
    return Math.max(sumOdd, sumEven)
};
const nums = [1,2]
console.log(rob(nums))