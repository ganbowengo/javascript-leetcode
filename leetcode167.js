/*
 * @Author       : ganbowen
 * @Date         : 2019-10-27 15:05:01
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-11 16:35:07
 * @Descripttion : 
 */
// 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

// 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

// 说明:

// 返回的下标值（index1 和 index2）不是从零开始的。
// 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
// 示例:

// 输入: numbers = [2, 7, 11, 15], target = 9
// 输出: [1,2]
// 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。

// 链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (numbers, target) {
//     let right = numbers.length - 1
//     let left = 0
//     let sum = 0
//     while (left < right) {
//         sum = numbers[left] + numbers[right]
//         if (sum === target) {
//             return [++left, ++right]
//         }
//         if (sum > target) {
//             right--
//         } else {
//             left++
//         }
//     }
//     return []
// };


var twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        let left = i + 1
        let right = numbers.length
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (target - numbers[mid] === numbers[i]) {
                return [i + 1, mid + 1]
            }
            if (target - numbers[mid] > numbers[i]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    return []
};




console.log(twoSum([0, 0, 11, 15], 0))