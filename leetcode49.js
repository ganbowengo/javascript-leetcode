// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

// 示例:

// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// 说明：

// 所有输入均为小写字母。
// 不考虑答案输出的顺序。

// 链接：https://leetcode-cn.com/problems/group-anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let strsLen = strs.length
    let i = 0
    let obj = {}
    while (i < strsLen) {
        let item = strs[i].split('')
        item.sort()
        let key = item.join('')
        obj[key] || (obj[key] = [])
        obj[key].push(strs[i])
        i++
    }
    let result = []
    let keys = Object.keys(obj)
    let k = 0
    while (k < keys.length) {
        result.push(obj[keys[k]])
        k++
    }
    return result
};

let a = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
console.log(a)