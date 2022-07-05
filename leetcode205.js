/*
 * @Author       : ganbowen
 * @Date         : 2022-07-05 21:15:08
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-05 22:46:28
 * @Descripttion : 
 */
// 205. 同构字符串
// 给定两个字符串 s 和 t ，判断它们是否是同构的。

// 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

// 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

 

// 示例 1:

// 输入：s = "egg", t = "add"
// 输出：true
// 示例 2：

// 输入：s = "foo", t = "bar"
// 输出：false
// 示例 3：

// 输入：s = "paper", t = "title"
// 输出：true

// var isIsomorphic = function(s, t) {
//     const slength = s.length
//     const sobj = {}
//     const tobj = {}
//     if(s.length !== t.length) return false
//     if(s === t) return true
//     for(let i = 0; i < slength; i++) {
//         sobj[s[i]] =  sobj[s[i]] || [i]
//         tobj[t[i]] =  tobj[t[i]] || [i]
//         sobj[s[i]] = [sobj[s[i]] > 1 ? i : sobj[s[i]][0], (++sobj[s[i]] || 1)]
//         tobj[t[i]] = [tobj[t[i]] > 1 ? i : tobj[t[i]][0], (++tobj[t[i]] || 1)]
//         if(sobj[s[i]][1] !== tobj[t[i]][1]) return false
//         if(sobj[s[i]][0] !== tobj[t[i]][0]) return false
//     }
//     return true
// };


var isIsomorphic = function(s, t) {
    const slength = s.length
    if(s.length !== t.length) return false
    if(s === t) return true
    const parse = function(data) {
        const arr = data.split('')
        const keys = {}
        const k = [...new Set(arr)]
        k.forEach((item,index) => {
            keys[item] = '_' + index
        })
        return  arr.map((item)=>{
            return keys[item]
        }).join('')
    }
    if(parse(s) === parse(t)) return true
    return false
};

console.log(isIsomorphic('abcdefghijklmnopqrstuvwxyzva','abcdefghijklmnopqrstuvwxyzck'))