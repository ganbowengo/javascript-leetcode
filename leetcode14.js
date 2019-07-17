// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let strsLen = strs.length
    if(!strsLen) return ""
    if(strsLen === 1) return strs[0]
    let len = strs[0].length
    let str = ''
    for (let i = 0; i < len; i++) {
        for (let j = 1; j < strsLen;) {
            if (strs[j][i] !== strs[0][i]) return str
            if (++j === strsLen) {
                str += strs[0][i]
            }
        }
    }
    return str
};

console.log(longestCommonPrefix(["aca","cba"]))