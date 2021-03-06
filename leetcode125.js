// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false

// 链接：https://leetcode-cn.com/problems/valid-palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase()
    let right = s.length - 1
    let left = 0
    let reg = /[a-zA-Z0-9]{1}/
    let itl = null
    let itr = null
    while (left < right) {
        itl = s[left]
        itr = s[right]
        while (!reg.test(itl)) {
            left++
            itl = s[left]
        }
        while (!reg.test(itr)) {
            right--
            itr = s[right]
        }
        if (itl !== itr) {
            return false
        }
        left++
        right--
    }
    return true
};

console.log(isPalindrome("     "))