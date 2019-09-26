// 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。

// 说明：不要使用任何内置的库函数，如  sqrt。

// 示例 1：

// 输入：16
// 输出：True
// 示例 2：

// 输入：14
// 输出：False

// 链接：https://leetcode-cn.com/problems/valid-perfect-square

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let left = 0
    let right = num
    if(num === 1) return 1
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (num === mid * mid) return true
        if (num < (mid * mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return false
};

console.log(isPerfectSquare(4))