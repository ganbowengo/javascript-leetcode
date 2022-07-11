/*
 * @Author       : ganbowen
 * @Date         : 2019-10-27 15:05:01
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-11 22:38:07
 * @Descripttion : 
 */
// 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

// 每行中的整数从左到右按升序排列。
// 每行的第一个整数大于前一行的最后一个整数。
// 示例 1:

// 输入:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// 输出: true
// 示例 2:

// 输入:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// 输出: false

// 链接：https://leetcode-cn.com/problems/search-a-2d-matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function (matrix, target) {
//     let len = matrix.length
//     let l = 0
//     let r = len
//     if (!len) return false
//     while (l < r) {
//         let mid = Math.floor((l + r) / 2)
//         let midtarget = matrix[mid][0]
//         if (target === midtarget) return true
//         if (target > midtarget) {
//             l = mid + 1
//         } else {
//             r = mid
//         }
//     }
//     if (l - 1 < 0) return false
//     let s = matrix[l - 1]
//     let ml = 0
//     let mr = s.length
//     while (ml < mr) {
//         let mid = Math.floor((ml + mr) / 2)
//         let midtarget = s[mid]
//         if (target === midtarget) return true
//         if (target > midtarget) {
//             ml = mid + 1
//         } else {
//             mr = mid
//         }
//     }
//     return false
// };


var searchMatrix = function (matrix, target) {
    let left = 0
    let right = matrix.length
    if (!right) return false
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (matrix[mid][0] <= target && target <= matrix[mid][matrix[mid].length - 1]) {
            // 存在于当前区间
            return matrix[mid].includes(target)
        } else if (matrix[mid][0] > target) {
            // 可能存在左区间
            if (right === mid) break
            right = mid
        } else if (target > matrix[mid][matrix[mid].length - 1]) {
            if (left === mid) break
            // 可能存在右区间
            left = mid
        }
        console.log('left', left, right)
    }
    return false
};

let matrix1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]]
let matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [10, 11, 16, 20],
    [23, 30, 34, 50],
    [53, 60, 64, 70],
    [73, 80, 84, 90],
]
let matrix3 = [
    [1]
]

let matrix4 = [
    [-8, -6, -6, -4, -2, -1, -1, -1, 0, 1, 2, 4, 6, 7, 7],
    [10, 10, 12, 13, 13, 14, 14, 16, 17, 17, 17, 17, 17, 18, 19],
    [22, 24, 26, 28, 29, 31, 32, 34, 34, 34, 34, 36, 38, 39, 39],
    [40, 40, 41, 43, 43, 44, 46, 47, 49, 49, 50, 52, 53, 55, 55],
    [56, 57, 59, 61, 62, 64, 65, 65, 66, 67, 68, 68, 69, 70, 71],
    [74, 75, 77, 77, 79, 79, 79, 80, 81, 83, 85, 87, 88, 89, 89],
    [91, 93, 94, 96, 97, 98, 99, 99, 100, 100, 102, 104, 105, 107, 107],
    [110, 112, 114, 114, 115, 117, 117, 118, 118, 120, 120, 121, 123, 124, 124],
    [127, 127, 129, 131, 133, 134, 134, 135, 137, 139, 139, 140, 142, 143, 144],
    [145, 146, 147, 149, 151, 151, 153, 155, 156, 156, 158, 160, 162, 162, 163]
]
console.log(searchMatrix(matrix1, 3))
console.log(searchMatrix(matrix2, 3))
console.log(searchMatrix(matrix3, 3))
console.log(searchMatrix(matrix4, 107))