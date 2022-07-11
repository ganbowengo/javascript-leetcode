/*
 * @Author       : ganbowen
 * @Date         : 2022-07-11 20:57:08
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-11 22:05:39
 * @Descripttion : 
 */
// 1351. 统计有序矩阵中的负数
// 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 请你统计并返回 grid 中 负数 的数目。



// 示例 1：

// 输入：grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// 输出：8
// 解释：矩阵中共有 8 个负数。
// 示例 2：

// 输入：grid = [[3,2],[1,0]]
// 输出：0


// 提示：

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let left = 0
    let right = grid.length
    let result = 0
    while (left < right) {
        // 查找一维数组中第一个小于0的位置 left
        let mid = Math.floor((left + right) / 2)
        if (grid[mid][0] >= 0) {
            // 遍历包含大于0的一维数组
            for (let i = left; i <= mid; i++) {
                let left = 0
                let right = grid[i].length
                while (left < right) {
                    // 查找二维数组中的第一个小于0的位置 left
                    let mid = Math.floor((left + right) / 2)
                    if (grid[i][mid] >= 0) {
                        left = mid + 1
                    } else {
                        right = mid
                    }
                }
                result += grid[i].length - left
            }
            left = mid + 1
        } else {
            right = mid
        }
    }
    result += (grid.length - left) * grid[0].length
    return result
}


// const a = [1, -1, -1, -2]
// let left = 0
// let right = a.length
// while (left < right) {
//     let mid = Math.floor((left + right) / 2)
//     console.log('mid', mid)
//     if (a[mid] >= 0) {
//         left = mid + 1
//     } else {
//         right = mid
//     }
//     console.log('left', left, right)
// }
// console.log('res', left)


console.log('countNegatives', countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]))
console.log('countNegatives', countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [-1, -1, -1, -2], [-1, -1, -2, -3]]))
console.log('countNegatives', countNegatives([[4, 3, 2, 1], [3, 2, 1, 1]]))