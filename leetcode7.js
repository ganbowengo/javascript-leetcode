// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21
// 注意:

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。


// var reverse = function (x) {
//     if (!x) return x
//     x = (x + '').split('').reverse()
//     x = x.join('')
//     if (x.indexOf('-') < 0) { // 正数
//         return +x > Math.pow(2, 31) - 1 ? 0 : +x
//     } else { // 负数
//         x = x.slice(0,-1)
//         return +x > Math.pow(2, 31) ? 0 : -x
//     }
// };

var reverse = function (x) {
    if (!x) return x
    let MAX = Math.pow(2, 31) - 1
    let MIN = -Math.pow(2, 31)
    let rev = 0
    while(x !== 0){
        let pop = x % 10
        x = parseInt(x/10)
        if(rev > (MAX/10) || rev ===(MAX/10) && rev > 7) return 0
        if(rev < (MIN/10) || rev ===(MIN/10) && rev < -8) return 0
        rev = rev * 10 + pop
    }
    return rev
}
console.log(reverse(123))