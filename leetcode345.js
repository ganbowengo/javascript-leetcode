// 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

// 示例 1:

// 输入: "hello"
// 输出: "holle"
// 示例 2:

// 输入: "leetcode"
// 输出: "leotcede"
// 说明:
// 元音字母不包含字母"y"。

// 链接：https://leetcode-cn.com/problems/reverse-vowels-of-a-string

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let reflect = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
        A: true,
        E: true,
        I: true,
        O: true,
        U: true
    }
    let len = s.length
    let k = 0
    let temp = null
    s = s.split('')
    len--
    while (k < len) {
        while (!reflect[s[k]] && k < len) k++
        while (!reflect[s[len]] && k < len) len--
        temp = s[k]
        s[k] = s[len]
        s[len] = temp
        k++
        len--
    }
    return s.join('')
};

console.log(reverseVowels('hello'))