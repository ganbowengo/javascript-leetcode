/*
 * @Author       : ganbowen
 * @Date         : 2022-07-11 16:37:18
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-11 18:36:47
 * @Descripttion : 
 */
// 1608. 特殊数组的特征值
// 给你一个非负整数数组 nums 。如果存在一个数 x ，使得 nums 中恰好有 x 个元素 大于或者等于 x ，那么就称 nums 是一个 特殊数组 ，而 x 是该数组的 特征值 。

// 注意： x 不必 是 nums 的中的元素。

// 如果数组 nums 是一个 特殊数组 ，请返回它的特征值 x 。否则，返回 -1 。可以证明的是，如果 nums 是特殊数组，那么其特征值 x 是 唯一的 。



// 示例 1：

// 输入：nums = [3,5]
// 输出：2
// 解释：有 2 个元素（3 和 5）大于或等于 2 。
// 示例 2：

// 输入：nums = [0,0]
// 输出：-1
// 解释：没有满足题目要求的特殊数组，故而也不存在特征值 x 。
// 如果 x = 0，应该有 0 个元素 >= x，但实际有 2 个。
// 如果 x = 1，应该有 1 个元素 >= x，但实际有 0 个。
// 如果 x = 2，应该有 2 个元素 >= x，但实际有 0 个。
// x 不能取更大的值，因为 nums 中只有两个元素。
// 示例 3：

// 输入：nums = [0,4,3,0,4]
// 输出：3
// 解释：有 3 个元素大于或等于 3 。
// 示例 4：

// 输入：nums = [3,6,7,7,0]
// 输出：-1


// 提示：

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    nums.sort((a, b) => a - b)
    if (nums[0] > nums.length) return nums.length
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i]
        let left = i
        let right = nums.length
        let mid = undefined
        while (left < right) {
            mid = Math.floor((left + right) / 2)
            if (nums[mid] >= curr) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        if (nums.length - left === nums[left]) return nums[left]
        if (nums.length - left + 1 === mid) return nums.length - left
    }
    return -1
};


// function specialArray (nums) {
//     nums.sort((a, b) => a - b)
//     let n = nums.length;
//     let l = 0, r = n;
//     while (l <= r) {
//         let x = (l + r) >> 1;
//         let idx = binarySearch(nums, x); // nums中第一个大于等于x的元素位置
//         if (x == n - idx) {
//             return x;
//         } else if (x < n - idx) { // 大于等于x的元素太多了，所以下一轮搜索要增大x的取值范围
//             l = x + 1;
//         } else { // 反之，减少x的取值范围
//             r = x - 1;
//         }
//     }
//     return -1;
// }

// function binarySearch (nums, x) {
//     let l = 0, r = nums.length - 1;
//     while (l <= r) {
//         let mid = (l + r) >> 1;
//         let val = nums[mid];
//         if (val >= x) {
//             r = mid - 1;
//         } else {
//             l = mid + 1;
//         }
//     }
//     return l;
// }

// 3,3,-1,-1
console.log('specialArray', specialArray([1, 0, 0, 6, 4, 9]))
console.log('specialArray', specialArray([0, 4, 3, 0, 4]))
console.log('specialArray', specialArray([3, 6, 7, 7, 0]))
console.log('specialArray', specialArray([1, 1, 2]))