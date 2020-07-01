/*
 * @Descripttion:
 * @Author: ganbowen
 * @Date: 2020-07-01 18:22:18
 * @LastEditors: ganbowen
 * @LastEditTime: 2020-07-01 18:23:45
 */
// 154. 寻找旋转排序数组中的最小值 II
// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

// 请找出其中最小的元素。

// 注意数组中可能存在重复的元素。

// 示例 1：

// 输入: [1,3,5]
// 输出: 1
// 示例 2：

// 输入: [2,2,2,0,1]
// 输出: 0
// 说明：

// 这道题是 寻找旋转排序数组中的最小值 的延伸题目。
// 允许重复会影响算法的时间复杂度吗？会如何影响，为什么？

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let length = nums.length
    let left = 0
    let right = length - 1
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[left] < nums[right]) break
        if (nums[left] === nums[right]) {
            left++
        } else {
            if (nums[left] <= nums[mid]) {
                // 左侧有序
                left = mid + 1
            } else {
                right = mid
            }
        }
    }
    return nums[left]
}

console.log('1', findMin([1]))
console.log('1', findMin([1, 1]))
console.log('1', findMin([1, 2, 3]))
console.log('1', findMin([1, 2, 1]))
console.log('1', findMin([10, 1, 10, 10, 10]))
console.log('0', findMin([2, 2, 2, 0, 1]))