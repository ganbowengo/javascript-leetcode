![image.png](https://pic.leetcode-cn.com/6dba21f7d8297fcf2f7672c6f423b3e7c53f840efbcda79489a8d7d2f79daa21-image.png)

1. 讲解主要步骤
    1.利用滑动窗口 双指针 map来解决当前问题
    2.找到最大的窗口 并且当前窗口非大小减去当前窗口最多的字母数等于或小于K
    3.遍历的时候同map来保存当前窗口每个字母出现的数量
    4.并且每次更新当前窗口的最大字母数
    5.判断当前的窗口大小是否满足 右指针-左指针-最大字母数 > K **(关键判断）来移动左指针**
    6.更新最大的窗口数

2.上代码

```js
var characterReplacement = function(s, k) {
    // 最大可替换次数K 等于最大的字符串减去最多出现的字母数
    let slen = s.length
    let r = 0
    let l = 0
    let obj = {}
    let maxCount = 0 // 存储窗口中出现最多的字母
    let result = 0 // 存储当前的最大窗口
    while (r < slen) {
        obj[s[r]] || (obj[s[r]] = 0)
        obj[s[r]]++ // 统计字母出现次数
        maxCount = Math.max(maxCount, obj[s[r]]) // 最多出现字母数
        while (r - l + 1 - maxCount > k) { 
            // 当总窗口的大小 - 当前窗口最大的字母数 大于可替换次数时 向右移动左指针
            // 窗口右移 同时将l位置的字母从窗口计数移除
            obj[s[l]]--
            l++
        }
        // 更新最大窗口的数
        result = Math.max(r - l + 1, result)
        r++
    }
    return result
};
```
3. 总结关键点
    1.左指针向右移动的条件判断 什么条件下移动左指针
    2.窗口大小 - 最大出现字母数 === K(最大可替换次数)
