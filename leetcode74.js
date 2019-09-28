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
var searchMatrix = function (matrix, target) {
    let len = matrix.length
    let l = 0
    let r = len
    if (!len) return false
    while (l < r) {
        let mid = Math.floor((l + r) / 2)
        let midtarget = matrix[mid][0]
        if (target === midtarget) return true
        if (target > midtarget) {
            l = mid + 1
        } else {
            r = mid
        }
    }
    if (l - 1 < 0) return false
    let s = matrix[l - 1]
    let ml = 0
    let mr = s.length
    while (ml < mr) {
        let mid = Math.floor((ml + mr) / 2)
        let midtarget = s[mid]
        if (target === midtarget) return true
        if (target > midtarget) {
            ml = mid + 1
        } else {
            mr = mid
        }
    }
    return false
};


// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]]
// let matrix = [
//   [1,  2,  3,  4],
//   [5,  6,  7,  8],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50],
//   [53, 60, 64, 70],
//   [73, 80, 84, 90],
// ]
let matrix = [
    []
]
console.log(searchMatrix(matrix, 1))