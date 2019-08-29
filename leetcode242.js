// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false
// 说明:
// 你可以假设字符串只包含小写字母。

// 进阶:
// 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

// 链接：https://leetcode-cn.com/problems/valid-anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//     let len1 = s.length - 1
//     let len2 = t.length - 1
//     if (len1 !== len2) return false
//     s = s.split('')
//     t = t.split('')
//     s.sort()
//     t.sort()
//     let k = 0
//     while (k < len1) {
//         if (s[k] !== t[k]) return false
//         if (s[len1] !== t[len1]) return false
//         k++
//         len1--
//     }
//     return true
// }

var isAnagram = function (s, t) {
    let len1 = s.length - 1
    let len2 = t.length - 1
    if (len1 !== len2) return false
    let a = count(s)
    let b = count(t)
    for (let i in a) {
        if (b[i] !== a[i]) return false
    }
    return true
}

function count(nums) {
    let a = {}
    nums.split('').forEach(element => {
        if (a[element]) {
            a[element]++
        } else {
            a[element] = 1
        }
    })
    return a
}
console.log(isAnagram("anagram","nagaram"))