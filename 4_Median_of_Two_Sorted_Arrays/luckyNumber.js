var findMedianSortedArrays = function(nums1, nums2) {
const numsOfNums = nums1.concat(nums2).sort((a,b)=> a - b);
    if (numsOfNums.length % 2 !== 0){
        return numsOfNums[(numsOfNums.length/2) - 0.5]
        }else if (numsOfNums.length % 2 === 0){
            let leftNumber = numsOfNums[(numsOfNums.length / 2) - 1]
            let rightNumber = numsOfNums[(numsOfNums.length / 2) ]
            let sum = (leftNumber  + rightNumber) / 2;
            return sum
        }

}
console.log(findMedianSortedArrays([1,2],[3,4]))