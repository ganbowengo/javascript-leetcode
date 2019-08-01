// 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

// 示例 1:

// 输入: "(()"
// 输出: 2
// 解释: 最长有效括号子串为 "()"
// 示例 2:

// 输入: ")()())"
// 输出: 4
// 解释: 最长有效括号子串为 "()()"  

/**
 * @param {string} s
 * @return {number}
 */
// var longestValidParentheses = function (s) {
//     let len = s.length
//     let arr = [],
//         current = []
//     let i = 0
//     let reflect = {
//         ')': '('
//     }
//     let max = 0,
//         currentlen = 0
//     while (i < len) {
//         currentlen = arr.length
//         if (currentlen && arr[currentlen - 1] === reflect[s.substr(i, 1)]) {
//             arr.pop()
//             current.pop()
//         } else {
//             current.push(i)
//             arr.push(s.substr(i, 1))
//         }
//         i++
//     }
//     current.push(len)
//     for (i = current.length - 1; i >= 0; i--) {
//         len = current[i - 1] === undefined ? 0 : 1 + current[i - 1]
//         currentlen = current[i] - len
//         max = Math.max(currentlen, max)
//     }
//     return max
// };


var longestValidParentheses = function (s) {
    let maxans = 0;
    let stack = [];
    let len = s.length
    stack.push(-1);
    for (let i = 0; i < s.length; i++) {
        if (s.substr(i, 1) === '(') {
            stack.push(i)
        } else {
            stack.pop()
            len = stack.length
            if (!len) {
                stack.push(i);
            } else {
                maxans = Math.max(maxans, i - stack[len - 1])
            }
        }
    }
    return maxans
};

console.log(longestValidParentheses("(()()((())))"))