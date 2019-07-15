// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length
    // if (len === 0 || len === 1) return s
    let j = 0,
        str = ''
    while (j < len) {
        // let strl = getStr(s, j, s, '')
        let strl = expendaroundcenter(s, j, j)
        let strl2 = expendaroundcenter(s, j, j + 1)
        let palindromeStr = strl.len > strl2.len ? s.slice(strl.l, strl.r) : s.slice(strl2.l, strl2.r)
        str = str.length > palindromeStr.length ? str : palindromeStr
        j++
    }
    return str
};

var getStr = function (s, j, lastStr, lastIndex) {
    lastIndex = lastStr.lastIndexOf(s[j])
    lastStr = s.slice(j, lastIndex + 1)
    if (isPalindrome(lastStr)) {
        return lastStr
    } else {
        return getStr(s, j, lastStr, lastIndex)
    }
}

//计算以left和right为中心的回文串长度
var expendaroundcenter = function (s, left, right) {
    let L = left;
    let R = right;
    while (L >= 0 && R < s.length && s[R] == s[L]) {
        L--;
        R++;
    }
    return {
        r: R,
        l: L + 1,
        len: R - L -1
    }
}

var isPalindrome = function (x) {
    var str = x + ''
    var len = Math.floor(str.length / 2)
    var flag = true
    var strLen = str.length - 1
    for (var i = strLen; i >= len; i--) {
        flag = flag && str[i] === str[strLen - i]
        if (!flag) return false
    }
    return true
}

console.log(longestPalindrome("abababababa"))