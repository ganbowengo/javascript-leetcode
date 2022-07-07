/*
 * @Author       : ganbowen
 * @Date         : 2019-10-27 15:05:01
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-07 15:00:52
 * @Descripttion : 
 */
// 实现 int sqrt(int x) 函数。

// 计算并返回 x 的平方根，其中 x 是非负整数。

// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

// 示例 1:

// 输入: 4
// 输出: 2
// 示例 2:

// 输入: 8
// 输出: 2
// 说明: 8 的平方根是 2.82842..., 
//      由于返回类型是整数，小数部分将被舍去。

// 链接：https://leetcode-cn.com/problems/sqrtx

// 牛顿迭代
/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function (x) {
//     if(!x) return x
//     let a = 1
//     do {
//         a = (a + x / a) / 2
//         check = a * a - x
//     } while (Math.abs(check) > 0.1)
//     return Math.floor(a)
// };

// 二分法
// var mySqrt = function (x) {
//     if(x == 0 || x == 1)    return x;
//         let l = 0;
//         let r = x;
//         while(l <= r){
//             let mid = l + (r - l) /2;
//             let s = x / mid; //用来判断mid大于目标还是小于目标，或等于目标
//             let ss = x / (mid + 1);
//             if(x / s == s)  return s; //刚好是他的算术平方根
//             if(s > mid && ss < mid + 1) return mid; //例如6 在2的平方以及 3的平方之间  答案为2
//             if(s > mid) l = mid + 1; //调整边界
//             if(s < mid) r = mid - 1;
//         }
//         return 0;
// };

// // 二分法
// var mySqrt = function (x) {
//     if (!x || x === 1) return x
//     let l = 0
//     let r = x / 2 + 1
//     let m = 0
//     while (l < r - 1) {
//         m = (l + r + 1) >> 1;
//         if (m * m <= x)
//             l = m;
//         else
//             r = m;
//     }
//     return l
// };


var mySqrt = function (x) {
    if (!x || x === 1) return x
    let l = 0
    let r = Math.floor(x / 2)
    while (l < r) {
        let mid = Math.floor((l + r) / 2)
        if (mid * mid === x) return mid
        if (mid * mid > x) {
            r = mid - 1
            if ((mid - 1) ** 2 < x) {
                return mid - 1
            }
        } else {
            l = mid + 1
            if ((mid + 1) ** 2 > x) {
                return mid
            }
        }
    }
    return l
};


console.log(mySqrt(16))