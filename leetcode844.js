// 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
// 示例 1：
// 输入：S = "ab#c", T = "ad#c"
// 输出：true
// 解释：S 和 T 都会变成 “ac”。
// 示例 2：

// 输入：S = "ab##", T = "c#d#"
// 输出：true
// 解释：S 和 T 都会变成 “”。
// 示例 3：

// 输入：S = "a##c", T = "#a#c"
// 输出：true
// 解释：S 和 T 都会变成 “c”。
// 示例 4：

// 输入：S = "a#c", T = "b"
// 输出：false
// 解释：S 会变成 “c”，但 T 仍然是 “b”。
//  

// 提示：

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S 和 T 只含有小写字母以及字符 '#'。

// 链接：https://leetcode-cn.com/problems/backspace-string-compare

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

//栈
var backspaceCompare = function (S, T) {
    return setStr(S) === setStr(T)
}

function setStr(n) {
    let len = n.length
    let stack = []
    let k = 0
    while (k < len) {
        if(n[k] !== '#') stack.push(n[k])
        else stack.pop()
        k++
    }
    return stack.join()
}
// var backspaceCompare = function (S, T) {
//     let n = setStr(S)
//     let m = setStr(T)
//     return n.join().replace('#','') === m.join().replace('#','')
// }

// function setStr(n) {
//     let len = n.length - 1
//     n = n.split('')
//     let k = 0
//     while (len >= 0) {
//         if (n[len] === '#') {
//             n.splice(len,1)
//             k++
//             len--
//             continue
//         }
//         if (k > 0 && n[len] !== '#') {
//             n.splice(len,1)
//             k--
//             len--
//             continue
//         }
//         len--
//     }
//     return n
// }

console.log(backspaceCompare("bxj##tw","bxo#j##tw"))