// 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

// 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

// 说明：

// 字母异位词指字母相同，但排列不同的字符串。
// 不考虑答案输出的顺序。
// 示例 1:

// 输入:
// s: "cbaebabacd" p: "abc"

// 输出:
// [0, 6]

// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
//  示例 2:

// 输入:
// s: "abab" p: "ab"

// 输出:
// [0, 1, 2]

// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
// 链接：https://leetcode-cn.com/problems/find-all-anagrams-in-a-string


/**
 * 
 * 滑动窗口思想 + 双指针
 * 1.右指针每次往前移动一格，每次移动都会有新的一个元素进入窗口，
 * 2.这时条件可能就会发生改变，然后根据当前条件来决定左指针是否移动，以及移动多少格。
 * 
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let obj = {}
    let slen = s.length
    let plen = p.length
    let i = 0

    // 存储窗口目标的信息
    while (i < plen) {
        obj[p[i]] || (obj[p[i]] = 0)
        obj[p[i]]++
        i++
    }
    let r = 0
    let l = 0
    let count = 0
    let result = []
    // 在主目标移动窗口
    while (r < slen) {
        obj[s[r]] || (obj[s[r]] = 0)
        obj[s[r]]--
        if (obj[s[r]] >= 0) {
            count++
        }
        // 判断右指针的位置大于目标的长度后 同时移动左右指针 窗口开始平行移动 窗口的大小保持变
        if (r > plen - 1) {
            obj[s[l]] || (obj[s[l]] = 0)
            obj[s[l]]++
            if (obj[s[l]] > 0) {
                count--
            }
            l++
        }
        if (count === plen) {
            result.push(l)
        }
        r++
    }
    return result
};

console.log(findAnagrams('cbacbabacd', 'abc'))