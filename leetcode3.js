/**
 * @param {string} s
 * @return {number}
 */

// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


// var lengthOfLongestSubstring = function (s) {
//     if (s.length === 1) return 1
//     if (!s) return 0
//     let num=0, i = 0,t = 0
//     for (let j = 0; j < s.length; j++) {
//         t = s.slice(i,j).indexOf(s[j])
//         if(t == -1){
//             num = Math.max(num,j-i+1)
//         } else {
//             i = i + t + 1
//         }
//     }
//     return num
// }

// var lengthOfLongestSubstring = function (s) {
//     if (s.length === 1) return 1
//     if (!s) return 0
//     let str = '',
//         num = 0
//     for (let j = 0; j < s.length; j++) {
//         str = '';
//         for (let i = j; i < s.length; i++) {
//             if (str.indexOf(s[i]) < 0) {
//                 str += s[i]
//             } else {
//                 break
//             }
//         }
//         if (str.length > num) {
//             num = str.length
//         }
//     }
//     return num
// }

var lengthOfLongestSubstring1 = function(s) {
    let l = s.length
    let num = 0,
        i = 0,
        j = 0,
        str = ''
    // [i,j)    
    while (i < l && j < l) {
        if (str.indexOf(s[j]) < 0) {
            str += s[j++]
            num = Math.max(num, j - i)
        } else {
            str = s.slice(++i, j)
        }
    }
    return num
}


var lengthOfLongestSubstring = function(s) {
    let slen = s.length
    let left = 0
    let right = 0
    let obj = {}
    let max = 0
    while (right < slen) {
        obj[s[right]] || (obj[s[right]] = 0)
        ++obj[s[right]]
        while(obj[s[right]] > 1){
            obj[s[left]]--
            left++
        }
        max = Math.max(right - left + 1, max)
        right++
    }
    return max
}

let s1 = lengthOfLongestSubstring1("asdfhaskfdlkjbasdfkn")
let s = lengthOfLongestSubstring("asdfhaskfdlkjbasdfkn")
console.log('s', s1, s)