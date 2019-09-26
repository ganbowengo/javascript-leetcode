// 实现 pow(x, n) ，即计算 x 的 n 次幂函数。

// 示例 1:

// 输入: 2.00000, 10
// 输出: 1024.00000
// 示例 2:

// 输入: 2.10000, 3
// 输出: 9.26100
// 示例 3:

// 输入: 2.00000, -2
// 输出: 0.25000
// 解释: 2-2 = 1/22 = 1/4 = 0.25
// 说明:

// -100.0 < x < 100.0
// n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。

// 链接：https://leetcode-cn.com/problems/powx-n

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// O(n)
// var myPow = function (x, n) {
//     if (n >= 0) {
//         return myAdd(x, n)
//     } else {
//         return 1 / myAdd(x, -n)
//     }
// };

// var myAdd = function (a, n) {
//     if (n === 0) return 1
//     if (n === 1) return a
//     return myAdd(a, Math.floor(n / 2)) * myAdd(a, n - Math.floor(n / 2))
// }

// console.time()
// console.log(myPow(2,2))
// console.timeEnd()


var myPow = function (x, n) {
    if (n === 0) return 1
    if (n < 0) {
        n = -n
        x = 1 / x
    }
    let res = myPow(x, Math.floor(n / 2))
    if (n % 2 === 0) {
        return res * res
    } else {
        return res * res * x
    }
};

console.time()
console.log(myPow(2, -2))
console.timeEnd()