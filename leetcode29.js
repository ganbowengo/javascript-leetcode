// 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

// 返回被除数 dividend 除以除数 divisor 得到的商。

// 示例 1:

// 输入: dividend = 10, divisor = 3
// 输出: 3
// 示例 2:

// 输入: dividend = 7, divisor = -3
// 输出: -2
// 说明:

// 被除数和除数均为 32 位有符号整数。
// 除数不为 0。
// 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let MIN = -Math.pow(2, 31)
    let MAX = Math.pow(2, 31) - 1
    if (dividend === MIN && divisor === -1) {
        return MAX
    }
    let i = 1
    let sign = 1
    if (dividend > 0 && divisor < 0 || dividend < 0 && divisor > 0) {
        sign = 0
    }
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    let dividend1 = dividend
    let divisor1 = divisor
    if (dividend < divisor) return 0
    dividend -= divisor
    while (dividend >= divisor) {
        i += i
        divisor += divisor
        dividend -= divisor
    }
    let result = i + divide(dividend1 - divisor, divisor1)
    return sign ? result : -result
}

console.log(divide(39, -5))