// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 示例:

// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

// 链接：https://leetcode-cn.com/problems/pascals-triangle

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let i = 0
    let res = []
    let item = null
    while (i < numRows) {
        let k = i
        item = new Array(++i)
        while (k >= 1) {
            s = res[i - 2][k] || 0
            t = res[i - 2][k - 1] || 0
            item[k] = t + s
            k--
        }
        item[k] = 1
        res.push(item)
    }
    return res
};

console.time()
console.log(generate(8))
console.timeEnd()