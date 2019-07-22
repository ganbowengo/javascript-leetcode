// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 示例:

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

/**
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function (digits) {
//     const reflect = {
//         2: "abc", //2
//         3: "def", //3
//         4: "ghi", //4
//         5: "jkl", //5
//         6: "mno", //6
//         7: "pqrs", //7
//         8: "tuv", //8
//         9: "wxyz" //9
//     }

//     let digitsArr = digits.split('')
//     function setStr(result, item) {
//         // result = ['a', 'b', 'c']
//         if (!item) return result
//         let len = result.length
//         let ilen = item.length
//         let result1 = []
//         let j = 0
//         do {
//             console.log(item)
//             for (let i = 0; i < ilen; i++) {
//                 result1.push((result[j] || '') + item[i])
//             }
//             j++
//         } while (j < len)
//         return setStr(result1, reflect[digitsArr.shift()])
//     }
//     return setStr([], reflect[digitsArr.shift()])
// };


// 人家的代码 好好利用原生的函数
var letterCombinations = function(digits) {
    if(digits.length===0) return [];
    var obj={
        1: "",
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    }
    var result=[];
    var len=digits.length;
    for(var i=0;i<len;i++){
        var str=obj[digits[i]];
        result.push(str.split(""));
    }
    var arr=result.reduce(function(v1,v2) {
        
        var temp=[];
        v1.forEach(a=>{
            v2.forEach(b=>{
                temp.push(a+b);
            })
        })
        console.log('v1',v1,v2)
        console.log('v2',temp,v2)
        return temp;
    })
    return arr;
};

console.log(letterCombinations("234"))