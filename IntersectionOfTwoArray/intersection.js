const intersection = (nums1, nums2) => {
const res = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]){
                res.push(nums1[i])
            }
        }
    }
    let newSet = [...new Set(res)]
    return newSet
}
console.log(intersection([1,2,2,1],[2,2]))