// 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 被读作  "one 1"  ("一个一") , 即 11。
// 11 被读作 "two 1s" ("两个一"）, 即 21。
// 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

// 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。

// 注意：整数顺序将表示为一个字符串。

//  

// 示例 1:

// 输入: 1
// 输出: "1"
// 示例 2:

// 输入: 4
// 输出: "1211"   

// 自己写的题解
// https://leetcode-cn.com/problems/count-and-say/solution/javascriptjie-fa-bu-di-gui-hao-dong-by-ce-liang-py/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let str = '1'
    if (n === 1) return str
    for (let i = 0; i < n-1; i++) {
        str = say(str)
    }
    return str
};

var say = function (str) {
    let result = ''
    let j = 1
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            j++
            continue
        } else {
            result += j + str[i]
            j = 1
        }
    }
    return result
}
console.log(countAndSay(3))