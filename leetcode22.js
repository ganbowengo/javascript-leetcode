// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

// 例如，给出 n = 3，生成结果为：

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

// 用到bfs 广度优先算法

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = []
    if (!n) return []
    backtrack(result, "", 0, 0, n);
    return result
};

function backtrack(ans, cur, open, close, max) {
    if (cur.length === max * 2) {
        ans.push(cur);
        return;
    }

    if (open < max){
        backtrack(ans, cur + "(", open + 1, close, max);
    }
       
    if (close < open){
        backtrack(ans, cur + ")", open, close + 1, max);
    }
}

console.log(generateParenthesis(4))