// 给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字母的最小子串。

// 示例：

// 输入: S = "ADOBECODEBANC", T = "ABC"
// 输出: "BANC"
// 说明：

// 如果 S 中不存这样的子串，则返回空字符串 ""。
// 如果 S 中存在这样的子串，我们保证它是唯一的答案。

// 链接：https://leetcode-cn.com/problems/minimum-window-substring


// 右移左指针不停的
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let slen = s.length
    let tlen = t.length
    let obj = {}
    let i = 0
    while (i < tlen) {
        obj[t[i]] || (obj[t[i]] = 0)
        obj[t[i]]++
        i++
    }
    let r = 0
    let l = 0
    let count = 0
    let min = slen + 1
    let result = ''
    while (r < slen) {
        obj[s[r]] || (obj[s[r]] = 0)
        obj[s[r]]--
        if (obj[s[r]] >= 0) { // 当前是p中存在的值
            count++
        }
        while (l < r && obj[s[l]] < 0) { // 当前的值在p中不存在 右移左指针
            obj[s[l]]++
            l++
        }
        if (count === tlen && min > r - l + 1) {
            min = r - l + 1
            result = s.substring(l, r + 1)
        }
        console.log(obj)
        r++
    }
    return result
};

// 当前题目无法判重
console.log(minWindow('ADOBECOEBANCD', 'ABC'))

/**
 * A    D   O   B   E   C   O   D   E   B   A   N   C   D
 * 
 * r第一次右移过程
 *  1. 当第一个C出现时 count等于tlen result = 'ADOBEC'
 *  2. 第二个A出现时    Obj.A = -1  Obj.B = -1  Obj.C = 0 
 *      l开始第一次右移过程 Obj.A++
 *      当 l 到 第一个C时 obj.C === 0  
 *      l第一次右移结束  l在第一个C的位置
 *      Obj.A = 0  Obj.B = -1  Obj.C = 0  result = 'COEBA'
 * r第二次右移过程
 *  1. 当第二个C出现时  Obj.A = 0  Obj.B = -1  Obj.C = -1
 *  2. l开始第二次右移过程 Obj.C++
 *      当 l 到 第二个B 出现的位置 Obj.B === 0  Obj.B++
 *      l 第二次右移结束 l在第二个B的位置
 *       Obj.A = 0  Obj.B = 0  Obj.C = 0  result = 'BANC'
 * r 第三次右移 不满足 r < slen 停止窗口滑动 结束
 * 
 */