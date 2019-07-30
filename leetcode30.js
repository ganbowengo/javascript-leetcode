// 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

// 示例 1：

// 输入：
//   s = "barfoothefoobarman",
//   words = ["foo","bar"]
// 输出：[0,9]
// 解释：
// 从索引 0 和 9 开始的子串分别是 "barfoor" 和 "foobar" 。
// 输出的顺序不重要, [9,0] 也是有效答案。
// 示例 2：

// 输入：
//   s = "wordgoodgoodgoodbestword",
//   words = ["word","good","best","word"]
// 输出：[] 

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    let result = []
    let wordsLen = words.length
    if (!s || !wordsLen) return []
    let step = words[0].length
    let len = s.length
    let i = -1,
        j = 0
    let canEnum = len - step * wordsLen
    let canFor = 0
    let arrCopy = words
    while (i++ < canEnum) {
        j = i
        words = [].concat(arrCopy)
        canFor = i + step * wordsLen
        for (; j < canFor; j += step) {
            let indexWords = words.indexOf(s.slice(j, j + step))
            if (indexWords < 0) break
            words.splice(indexWords, 1)
        }
        if (j === canFor) {
            result.push(i)
        }
    }
    return result
};

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]))