/*
 * @Author       : ganbowen
 * @Date         : 2022-07-05 22:49:58
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-05 23:08:04
 * @Descripttion : 
 */
// 392. 判断子序列
// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

// 进阶：

// 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

// 致谢：

// 特别感谢 @pbrother 添加此问题并且创建所有测试用例。

 

// 示例 1：

// 输入：s = "abc", t = "ahbgdc"
// 输出：true
// 示例 2：

// 输入：s = "axc", t = "ahbgdc"
// 输出：false
 
var isSubsequence = function(s, t) {
    const slength = s.length
    const tlength = t.length
    let j = -1
    if(slength > tlength) return false
    if(s === t) return true 
    if(!s) return true 
    for(let i = 0; i < slength;) {
        j++
        while(j < tlength) {
            if(s[i] === t[j]) break
            else {
                j++
            }
        }
        i++
        if(i === slength && j < tlength)  return true
    }
    return false
};
console.log('1', isSubsequence('aaaaaa', 'bbaaaa'))