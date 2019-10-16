// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,0,1,2,2,5,6] 可能变为 [2,5,6,0,0,1,2] )。

// 编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。

// 示例 1:

// 输入: nums = [2,5,6,0,0,1,2], target = 0
// 输出: true
// 示例 2:

// 输入: nums = [2,5,6,0,0,1,2], target = 3
// 输出: false
// 进阶:

// 这是 搜索旋转排序数组 的延伸题目，本题中的 nums  可能包含重复元素。
// 这会影响到程序的时间复杂度吗？会有怎样的影响，为什么？

// 链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let len = nums.length
    let left = 0
    let right = len - 1
    while (left <= right) {
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--
        let mid = Math.floor((left + right + 1) / 2)
        if(target === nums[mid] || target === nums[left] || target === nums[right]) return true
        if (nums[left] < nums[mid]) {
            // 左侧有序
            if(target < nums[mid] && target > nums[left]){
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            // 右侧有序
            if(target > nums[mid] && target < nums[right]){
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return false
};

console.log(search([2,5,6,0,0,1,2],4))