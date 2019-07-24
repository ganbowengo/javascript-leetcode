// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 示例 1:

// 输入: "()"
// 输出: true
// 示例 2:

// 输入: "()[]{}"
// 输出: true
// 示例 3:

// 输入: "(]"
// 输出: false
// 示例 4:

// 输入: "([)]"
// 输出: false
// 示例 5:

// 输入: "{[]}"
// 输出: true

// var isValid = function (s) {
//     let arr = []
//     let l = s.length
//     if(l === 0){
//         return true
//     }
//     if(l % 2 !== 0){
//         return false
//     }
//     let map = {
//         '}': '{',
//         ']': '[',
//         ')': '('
//     }
//     for (let i = 0; i < l; i++) {
//         if(arr.length > 0){
//             if (arr[arr.length - 1] === map[s[i]]) {
//                 arr.pop()
//             } else {
//                 arr.push(s[i])
//             }
//         }else{
//             arr.push(s[i])
//         }
//     }
//     if (arr.length === 0) {
//         return true
//     }
//     return false
// };

var isValid = function (s) {
    while((s.indexOf('()') > 0) || (s.indexOf('[]')>0) || (s.indexOf('{}')>0)){
        s.replace('()','')
        s.replace('{}','')
        s.replace('[]','')
    }
    if (s) {
        return false
    }
    return true
};



let s = isValid('{[()]}([])[]{}')
console.log(s)