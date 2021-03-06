// 你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。

// 给定一个数字 n，找出可形成完整阶梯行的总行数。

// n 是一个非负整数，并且在32位有符号整型的范围内。

// 示例 1:

// n = 5

// 硬币可排列成以下几行:
// ¤
// ¤ ¤
// ¤ ¤

// 因为第三行不完整，所以返回2.
// 示例 2:

// n = 8

// 硬币可排列成以下几行:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤

// 因为第四行不完整，所以返回3.

// 链接：https://leetcode-cn.com/problems/arranging-coins

/**
 * @param {number} n
 * @return {number}
 */
// var arrangeCoins = function (n) {
//     let i = 1
//     while (n >= i) {
//         n -= i 
//         i++
//     }
//     return i - 1
// };


// x(x+1) = 2n 等差数列和
// (-b + sqrt(b^2 - 4ac))/2
// var arrangeCoins = function (n) {
//     return Math.floor((Math.sqrt(1 + 8 * n) - 1) / 2)
// };


var arrangeCoins = function (n) {
    let left = 0
    let right = n
    while (left < right) {
        let mid = Math.floor((left + right + 1) / 2)
        let r = mid * (mid + 1) / 2  // ==> x(x+1) = 2n 比较mid比最终结果x大还是小 小则将left 左移 否则将right右移
        if (r > n) {
            right = mid - 1
        } else {
            left = mid
        }
    }
    return left
};

console.time()
for (let i = 1; i < 20; i++) {
    console.log(i, '-----', arrangeCoins(i))
}
console.timeEnd()