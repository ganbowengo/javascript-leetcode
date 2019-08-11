/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 20:57:38
 * @LastEditTime: 2019-08-10 22:23:20
 * @LastEditors: Please set LastEditors
 */
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

// 示例:

// 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出: 6

// 链接：https://leetcode-cn.com/problems/trapping-rain-water

/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//     let sum = 0
//     let left = 0
//     let right = 0
//     let min = 0
//     let container = 0
//     let flag = true
//     for (let i = 0, l = height.length; i < l; i++) {
//         if (height[i] > 0 && flag) {
//             left = i
//             flag = false
//         }
//         if (height[i] > height[i + 1] || height[i + 1]===undefined) {
//             right = i
//         }
//         if (right - left - 1 > 0) {
//             console.log('----',i, left, right)
//             leftCopy = left
//             container = 0
//             min = Math.min(height[(right)], height[(left)])
//             while (++left < right) {
//                 container += height[left] >  min ? min : height[left]
//             }
//             sum += (right - leftCopy - 1) * min - container
//             left = right
//         }
//     }
//     return sum
// };

var trap = function (height) {
    let sum = 0
    let left = 0
    let right = height.length - 1
    let left_max = 0
    let right_max = 0
    while (left < right) {
        if (height[left] > height[right]) {
            height[right] >= right_max ? (right_max = height[right]) : (sum += right_max - height[right])
            right--
        } else {
            height[left] >= left_max ? (left_max = height[left]) : (sum += left_max - height[left])
            left++
        }
    }
    return sum
};


console.log(trap([5, 2, 1, 2, 1, 5]))