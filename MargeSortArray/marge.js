const merge = function (nums1, m, nums2, n) {
    for (let i = m, j = 0; j < n; i++, j++) {
        nums1[i] = nums2[j]
    }
    return nums1.sort((x, y) => x - y)
};