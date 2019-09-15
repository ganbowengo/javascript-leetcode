// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。

// 示例: 

// 输入: s = 7, nums = [2,3,1,2,4,3]
// 输出: 2
// 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
// 进阶:

// 如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。

// 链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let numsl = nums.length
    let start = -1
    let end = -1
    let sum = 0
    let count = numsl
    while (end < numsl && start <= end) {
        if (sum >= s) {
            count = Math.min(count, end - start)
            if (count === 1) return 1
            start++
            sum -= nums[start]
        } else {
            end++
            sum += nums[end]
        }
    }
    return ++start && count
};
// 最差O(2n) 双指针
console.time()
console.log(minSubArrayLen(18, [18, 1, 1, 1, 1, 18]))
console.timeEnd()