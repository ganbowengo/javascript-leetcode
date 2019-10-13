// 给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 k 次。在执行上述操作后，找到包含重复字母的最长子串的长度。

// 注意:
// 字符串长度 和 k 不会超过 104。

// 示例 1:

// 输入:
// s = "ABAB", k = 2

// 输出:
// 4

// 解释:
// 用两个'A'替换为两个'B',反之亦然。
// 示例 2:

// 输入:
// s = "AABABBA", k = 1

// 输出:
// 4

// 解释:
// 将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
// 子串 "BBBB" 有最长重复字母, 答案为 4。

// 链接：https://leetcode-cn.com/problems/longest-repeating-character-replacement

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    // 最大可替换次数K 等于最大的字符串减去最多出现的字母数
    let slen = s.length
    let r = 0
    let l = 0
    let obj = {}
    let maxCount = 0 // 存储窗口中出现最多的字母
    let result = 0 // 存储当前的最大窗口
    while (r < slen) {
        obj[s[r]] || (obj[s[r]] = 0)
        obj[s[r]]++
        maxCount = Math.max(maxCount, obj[s[r]]) // 最多出现字母数
        while (r - l + 1 - maxCount > k) { 
            // 当总窗口的大小 - 当前窗口最大的字母数 大于可替换次数时 向右移动左指针
            // 窗口右移 同时将l位置的字母从窗口计数移除
            obj[s[l]]--
            l++
        }
        result = Math.max(r - l + 1, result)
        r++
    }
    return result
};

console.log(characterReplacement('AABABBA',1))