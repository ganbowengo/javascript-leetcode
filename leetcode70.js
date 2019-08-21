// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 示例 1：

// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶
// 示例 2：

// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶

// 链接：https://leetcode-cn.com/problems/climbing-stairs


//菲波那切数列的规律
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//     let arr = []
//     arr[0] = 1
//     arr[1] = 1
//     for (let i = 2; i <= n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2]
//     }
//     return arr[n]
// };

// 尾递归 获得菲波那切数
var climbStairs = function(n) {
    return tail(n, 2, 1)
};
var tail = function(n, a, b) {
    if(n === 1) return 1;
    if(n === 2) return a;
    return tail(n - 1, a + b, a);
}

console.log(climbStairs(4))