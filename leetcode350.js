// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]
// 示例 2:

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [4,9]
// 说明：

// 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
// 我们可以不考虑输出结果的顺序。
// 进阶:

// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

// 链接：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function (nums1, nums2) {
//     let r = []
//     let a = count(nums1)
//     let b = count(nums2)
//     for (let i in a) {
//         if (b[i]) {
//             let c = Math.min(b[i], a[i])
//             r = r.concat(new Array(c).fill(+i, 0, c))
//         }
//     }
//     return r
// };

// function count(nums) {
//     let a = {}
//     nums.forEach(element => {
//         if (a[element]) {
//             a[element]++
//         } else {
//             a[element] = 1
//         }
//     })
//     return a
// }

// 借鉴----
// var intersect = function (nums1, nums2) {
//     const obj = {};
//     nums1.forEach(item => {
//         if (!obj[item]) {
//             obj[item] = 1;
//         } else {
//             obj[item]++;
//         }
//     });
//     return nums2.filter(item => {
//         if (!obj[item]) {
//             return false;
//         }
//         obj[item]--;
//         return true;
//     });
// };


/**
 * 双指针思路
 * 1. 排序
 * 2. 指针指向nums1 nums2 的其实位置 
 * 3. 相同时 指针同时向后移 不相等时 那个元素小 那个指针向后移
 * 
 */
var intersect = function(nums1, nums2) {
    let p1 = 0
    let p2 = 0
    let res = []
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    while(p1 < nums1.length && p2 < nums2.length) {
        if(nums1[p1] == nums2[p2]) {
            res.push(nums1[p1])
            p1++
            p2++
        } else if(nums1[p1] < nums2[p2]) {
            p1++
        } else {
            p2++
        }
    }
    return res
};

console.log(intersect([1, 2, 2, 3, 4, 2, 3, 1], [1, 2, 3, 4, 1]))