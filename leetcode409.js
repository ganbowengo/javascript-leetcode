/*
 * @Author       : ganbowen
 * @Date         : 2022-07-08 16:01:52
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-08 16:19:44
 * @Descripttion : 
 */
// 409. 最长回文串
// 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。

// 在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。



// 示例 1:

// 输入:s = "abccccdd"
// 输出:7
// 解释:
// 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
// 示例 2:

// 输入:s = "a"
// 输入:1
// 示例 3:

// 输入:s = "bb"
// 输入: 2


// 提示:

// 1 <= s.length <= 2000
// s 只能由小写和/或大写英文字母组成


// 思路 偶数个直接构成回文 奇数-1构成回文
var longestPalindrome = function (s) {
    const container = {}
    let abs = 0
    let hasOdd = 0
    Array.prototype.forEach.call(s, (element => {
        container[element] = (++container[element] || 1)
    }))
    for (let key in container) {
        const curr = container[key]
        if (curr % 2) { // 奇数个
            hasOdd = 1
            abs += curr - 1
        } else { //偶数个
            abs += curr
        }
    }

    return abs + hasOdd
};


var longestPalindrome = function (s) {
    const container = {}
    let abs = 0
    for (let i = 0; i < s.length; i++) {
        const curr = s[i]
        if (!container[curr]) {
            container[curr] = 1
        } else {
            abs += 2
            delete container[curr]
        }
    }
    if (s.length > abs) abs++
    return abs
}


console.log('longestPalindrome', longestPalindrome('abccccdd'))