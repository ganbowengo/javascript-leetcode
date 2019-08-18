/*
 * @Description: 通配符匹配
 * @Author: your name
 * @Date: 2019-08-13 20:46:02
 * @LastEditTime: 2019-08-13 22:30:03
 * @LastEditors: Please set LastEditors
 */
// 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。

// '?' 可以匹配任何单个字符。
// '*' 可以匹配任意字符串（包括空字符串）。
// 两个字符串完全匹配才算匹配成功。

// 说明:

// s 可能为空，且只包含从 a-z 的小写字母。
// p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
// 示例 1:

// 输入:
// s = "aa"
// p = "a"
// 输出: false
// 解释: "a" 无法匹配 "aa" 整个字符串。
// 示例 2:

// 输入:
// s = "aa"
// p = "*"
// 输出: true
// 解释: '*' 可以匹配任意字符串。
// 示例 3:

// 输入:
// s = "cb"
// p = "?a"
// 输出: false
// 解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
// 示例 4:

// 输入:
// s = "adceb"
// p = "*a*b"
// 输出: true
// 解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
// 示例 5:

// 输入:
// s = "acdcb"
// p = "a*c?b"
// 输入: false

// 链接：https://leetcode-cn.com/problems/wildcard-matching

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let len1 = s.length
    let len2 = p.length
    let i = 0,
        j = 0
    let last = 0
    while (i < len1 || j < len2) {
        if (p[j] === '*' && !p[j + 1]) {
            return true
        }
        if (!s[i] || !p[j]) {
            return false
        }
        if (p[j] === '?' || s[i] === p[j]) {
            i++
            j++
            continue
        }
        
        if (p[j] === '*' && s[i] !== p[j + 1] && p[j + 1] != '?') {
            if (p[j + 1] === '*'){
                j++
            }
            i++
            continue
        }
        last = s.lastIndexOf(s[i])
        if (last === i) {
            if (p[j] === '*' && (s[i] === p[j + 1] || p[j + 1] === '?')) {
                i++
                j += 2
                console.log('i,j',i,j)
                continue
            }
        } else {
            i = last
            if (p[j] === '*' && (s[i] === p[j + 1] || p[j + 1] === '?')) {
                i++
                j += 2
                continue
            }
        }
        if (s[i] !== p[j]) {
            return false
        }
    }
    return true
};

console.log(isMatch("hi","*?"))