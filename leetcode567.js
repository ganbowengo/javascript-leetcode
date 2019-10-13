// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

// 换句话说，第一个字符串的排列之一是第二个字符串的子串。

// 示例1:

// 输入: s1 = "ab" s2 = "eidbaooo"
// 输出: True
// 解释: s2 包含 s1 的排列之一 ("ba").
//  

// 示例2:

// 输入: s1= "ab" s2 = "eidboaoo"
// 输出: False
//  

// 注意：

// 输入的字符串只包含小写字母
// 两个字符串的长度都在 [1, 10,000] 之间

// 链接：https://leetcode-cn.com/problems/permutation-in-string

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let short = s1.length
    let long = s2.length
    let i = 0
    let obj = {}
    while (i < short) {
        obj[s1[i]] || (obj[s1[i]] = 0)
        obj[s1[i]]++
        i++
    }
    let r = 0
    let l = 0
    let count = 0
    while (r < long) {
        obj[s2[r]] || (obj[s2[r]] = 0)
        obj[s2[r]]--
        if (obj[s2[r]] >= 0) {
            count++
        }

        // 移动左指针 固定窗口大小
        if (r > short - 1) {
            obj[s2[l]]++
            if(obj[s2[l]] > 0) { // 每当出现left 不是s1中存在的字母 count--
                count--
            }
            l++
        }
        if(count === short) return true
        r++
    }
    return false
};

console.log(checkInclusion('aab', 'easdascdsdidsadabaoaoo'))