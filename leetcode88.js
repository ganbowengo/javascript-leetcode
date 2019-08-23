// 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

// 说明:

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
// 示例:

// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]

// 链接：https://leetcode-cn.com/problems/merge-sorted-array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 不知道为啥 leetcode一直不过 
// var merge = function (nums1, m, nums2, n) {
//     let i = 0
//     let j = 0
//     while (j < n) {
//         console.log('nums1[i]',nums1)
//         if (nums2[j] <= nums1[i]) {
//             nums1.splice(i, 0, nums2[j])
//             j++
//         } else {
//             i++
//         }
//         if(i >= m) {
//             return nums1.slice(0, m + j).concat(nums2.slice(j))
//         }
//     }
//     nums1.length = m + n
//     return nums1
// };

var merge = function (nums1, m, nums2, n) {
    let p = m + n - 1
    n--
    m--
    while (m >= 0 && n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[p] = nums1[m]
            m--
        } else {
            nums1[p] = nums2[n]
            n--
        }
        p--
    }
    nums1.splice(0, n + 1, ...nums2.slice(0, n+1))
    return nums1
}

console.log(merge([0], 0, [1], 1))