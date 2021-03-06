// 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。



// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 示例:

// 输入: 3
// 输出: [1,3,3,1]
// 进阶：

// 你可以优化你的算法到 O(k) 空间复杂度吗？

// 链接：https://leetcode-cn.com/problems/pascals-triangle-ii

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function (rowIndex) {
//     let prev = [1]
//     let next = [],
//         nextl = 0
//     let k = 0
//     while (k <= rowIndex) {
//         let i = 0
//         next = []
//         next.push(1)
//         nextl = next.length
//         while (nextl <= k) {
//             let l = prev[i] || 0
//             let r = prev[i + 1] || 0
//             next[++i] = l + r
//             nextl = next.length
//         }
//         prev = next.slice()
//         k++
//     }
//     return next
// };

var getRow = function (rowIndex) {
    let next = [1]
    let k = 1
    while (k <= rowIndex) {
        let i = k
        while (i >= 1) {
            let r = next[i] || 0
            let l = next[i - 1] || 0
            next[i--] = l + r
        }
        k++
    }
    return next
};

console.time()
console.log(getRow(0))
console.timeEnd()