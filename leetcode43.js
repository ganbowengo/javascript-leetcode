/*
 * @Description: 字符串相乘
 * @Author: ganbowen
 * @Date: 2019-08-11 20:57:34
 * @LastEditTime: 2019-08-13 20:31:20
 * @LastEditors: Please set LastEditors
 */
// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 示例 1:

// 输入: num1 = "2", num2 = "3"
// 输出: "6"
// 示例 2:

// 输入: num1 = "123", num2 = "456"
// 输出: "56088"
// 说明：

// num1 和 num2 的长度小于110。
// num1 和 num2 只包含数字 0-9。
// num1 和 num2 均不以零开头，除非是数字 0 本身。
// 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。

// 链接：https://leetcode-cn.com/problems/multiply-strings

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var multiply = function (num1, num2) {
//     let len1 = num1.length - 1
//     let len2 = num2.length - 1
//     let sum = []
//     for (let i = len1; i >= 0; i--) {
//         for (let j = len2; j >= 0; j--) {
//             sum.unshift(num1[i] * num2[j])
//         }
//     }
//     let j = 1
//     let left = sum.splice(-(len2 + 1))
//     if (sum.length === 0) {
//         left = add(left, new Array(len2 + 1).fill(0, 0))
//     } else {
//         while (sum.length > 0) {
//             right = sum.splice(-(len2 + 1))
//             if (!right) break
//             left = add(left, right.concat(new Array(j)).fill(0, len2 + 1))
//             j++
//         }
//     }
//     if(+left.join('')) return left.join('')
//     return "0"
// };

// function add(left, right) {
//     let len = right.length - 1
//     while (left.length) {
//         right[len] = right[len] + left.pop()
//         ifadd(right, len)
//         len--
//     }
//     return right
// }

// function ifadd(right, i) {
//     let current = 0
//     if (right[i] > 9) {
//         current = Math.floor((right[i] + current) / 10)
//         right[i] %= 10
//         if (--i >= 0) {
//             right[i] += current
//         } else {
//             right.unshift(current)
//         }
//     }
// }

var multiply = function (num1, num2) {
    let res = ''
    let m = num1.length
    let n = num2.length
    let val = Array(m + n).fill(0)
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let mul = (num1[i] - 0) * (num2[j] - 0)
            let p1 = i + j
            let p2 = i + j + 1
            let sum = mul + val[p2]
            val[p1] += Math.floor(sum / 10)
            val[p2] = sum % 10
        }
    }
    for (let i = 0; i < val.length; i++) {
        if (res.length || val[i] !== 0) {
            res += val[i].toString()
        }
    }
    return res.length ? res : '0'
}


// console.log(multiply('9', '99'))
// console.log(multiply('998888', '9111'))
console.log(multiply('9111', '998888'))