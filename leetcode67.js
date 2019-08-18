// 给定两个二进制字符串，返回他们的和（用二进制表示）。

// 输入为非空字符串且只包含数字 1 和 0。

// 示例 1:

// 输入: a = "11", b = "1"
// 输出: "100"
// 示例 2:

// 输入: a = "1010", b = "1011"
// 输出: "10101"

// 链接：https://leetcode-cn.com/problems/add-binary

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let lena = a.length - 1
    let lenb = b.length - 1
    let i = Math.min(lena, lenb)
    let result = ''
    while (i >= 0) {
        result = +a[lena] + +b[lenb] + result
        i--
        lena--
        lenb--
    }
    result = (lena > lenb ? a.substr(0, lena + 1) : b.substr(0, lenb + 1)) + result
    let lenr = result.length
    result = result.split('')
    while(lenr > 0){
        if(+result[lenr] > 1){
            result[lenr] = result[lenr] % 2
            result[lenr - 1] = +result[lenr - 1] + 1
        }
        lenr--
    }
    if (result[lenr] > 1) {
        result.unshift(1)
        result[lenr + 1] = result[lenr + 1] % 2
    }
    return result.join('')
};

console.log(addBinary("11111", "1"))