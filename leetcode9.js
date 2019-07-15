// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 示例 1:

// 输入: 121
// 输出: true
// 示例 2:

// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3:

// 输入: 10
// 输出: false
// 解释: 从右向左读, 为 01 。因此它不是一个回文数。
// 进阶:

// 你能不将整数转为字符串来解决这个问题吗？

// var isPalindrome = function(x) {
//     var i = x+'';
//     var l = i.length -1,str = ''
//     for(var s = l;s >= 0;s--){
//         str += i[s]
//     }
//     if(i === str){
//         return true
//     }else{
//         return false
//     }
// }


// var isPalindrome = function (x) {
//     var str = x + ''
//     var len = Math.floor(str.length / 2)
//     var flag = true
//     var strLen = str.length - 1
//     for (var i = strLen; i >= len; i--) {
//         flag = flag && str[i] === str[strLen - i]
//         if (!flag) return false
//     }
//     return true
// }

var isPalindrome = function (x) {
    var y = 0,
        pop = 0,
        tmp = x;
    while (0 < tmp) {
        pop = tmp % 10;
        tmp = Math.floor(tmp / 10);
        y = y * 10 + pop
    }
    if (0 == x || x == y)
        return true
    return false
};

var s = isPalindrome(0)
console.log(s)


var removeDuplicates = function (nums) {
    return [...new Set(nums)]
};

var l = removeDuplicates([1, 2, 3, 3, 4, 2])
console.log(l)