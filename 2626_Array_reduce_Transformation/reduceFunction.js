var reduce = function(nums, init, fn) {
    let sum = init;
    for (let i = 0; i < nums.length; i++){
        sum = fn(sum, nums[i]);
    }
    return sum;
};
console.log(reduce([1,2,3,4],0,function (acc,next){
    return acc + next;
}))