// 给定一个含有正整数和负整数的环形数组 nums。 如果某个索引中的数 k 为正数，则向前移动 k 个索引。相反，如果是负数 (-k)，则向后移动 k 个索引。因为数组是环形的，所以可以假设最后一个元素的下一个元素是第一个元素，而第一个元素的前一个元素是最后一个元素。

// 确定 nums 中是否存在循环（或周期）。循环必须在相同的索引处开始和结束并且循环长度 > 1。此外，一个循环中的所有运动都必须沿着同一方向进行。换句话说，一个循环中不能同时包括向前的运动和向后的运动。
//  

// 示例 1：

// 输入：[2,-1,1,2,2]
// 输出：true
// 解释：存在循环，按索引 0 -> 2 -> 3 -> 0 。循环长度为 3 。
// 示例 2：

// 输入：[-1,2]
// 输出：false
// 解释：按索引 1 -> 1 -> 1 ... 的运动无法构成循环，因为循环的长度为 1 。根据定义，循环的长度必须大于 1 。
// 示例 3:

// 输入：[-2,1,-1,-2,-2]
// 输出：false
// 解释：按索引 1 -> 2 -> 1 -> ... 的运动无法构成循环，因为按索引 1 -> 2 的运动是向前的运动，而按索引 2 -> 1 的运动是向后的运动。一个循环中的所有运动都必须沿着同一方向进行。
//  

// 提示：

// -1000 ≤ nums[i] ≤ 1000
// nums[i] ≠ 0
// 0 ≤ nums.length ≤ 5000
//  

// 进阶：

// 你能写出时间时间复杂度为 O(n) 和额外空间复杂度为 O(1) 的算法吗？
// 链接：https://leetcode-cn.com/problems/circular-array-loop
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    let len = nums.length
    let i = 0
    let right = len - 1
    while (i < right) {
        let current = getType(i, len, nums) || getType(right, len, nums)
        if (current) return true
        i++
        right--
    }
    return false
};

function getType(i, len, nums) {
    // 核心函数
    let item = true
    let fast = i
    let slow = i
    let flag = (slow + nums[slow]) > slow ? 0 : 1
    while (fast < len) {
        slow = forwardJudge(slow, nums, len, flag)
        if (!slow && slow !== 0) return false

        fast = forwardJudge(fast, nums, len, flag)
        if (!fast && fast !== 0) return false
        fast = forwardJudge(fast, nums, len, flag)
        if (!fast && fast !== 0) return false

        if (fast === slow) {
            return true
        }
    }
    return false
}

function forwardJudge(index, nums, len, flag) {
    // 判断同一方向
    let item = (index + nums[index]) > index ? 0 : 1
    if (item !== flag) return false
    // 向前移动一步 且判断不是自己本身的位置
    let slow = getCurrant(nums, index, len)
    if (index === slow) {
        return false
    }
    return slow
}

function getCurrant(nums, index, len) {
    // 获取下一个下标
    let current = index + nums[index]
    if (current >= 0) {
        return current < len ? current : current % len
    } else {
        return current % len + len
    }
}

console.log(circularArrayLoop([-2,-17,-1,-2,-2]))

/*
    整体思路： 
        利用快慢指针的方式 有环的时候 快指针总会追上慢指针
        细节判断：
            1.不同于链表 该数组会出现向前或向后移动的情况 
                在每次移动之前先标记 移动的方向 保证每个开始的位置都是一个方向 否则直接return false
            2.环的长度大于1 即下一次出现的位置是 与本次下标位置不相同
            3.每个位置都可以是环的起点
*/