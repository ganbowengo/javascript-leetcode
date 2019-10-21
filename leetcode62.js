// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

// 问总共有多少条不同的路径？



// 例如，上图是一个7 x 3 的网格。有多少可能的路径？

// 说明：m 和 n 的值均不超过 100。

// 示例 1:

// 输入: m = 3, n = 2
// 输出: 3
// 解释:
// 从左上角开始，总共有 3 条路径可以到达右下角。
// 1. 向右 -> 向右 -> 向下
// 2. 向右 -> 向下 -> 向右
// 3. 向下 -> 向右 -> 向右
// 示例 2:

// 输入: m = 7, n = 3
// 输出: 28

// 链接：https://leetcode-cn.com/problems/unique-paths

// 动态规划  最优子结构 边界 状态转移公式
// 7 * 3   => 6*3  7*2
// 
// m *n = (m-1) * n + m * (n-1)

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let marr = new Array(n).fill(1)
    for (let j = 1; j < m; j++) {
        for (let i = 1; i < n; i++) {
            marr[i] += marr[i-1];
        }
    }
    return marr[n-1]
};

console.log(uniquePaths(3, 7))