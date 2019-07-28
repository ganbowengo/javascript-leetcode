// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。

// 示例 1:

// 输入: [1,3,5,6], 5
// 输出: 2
// 示例 2:

// 输入: [1,3,5,6], 2
// 输出: 1
// 示例 3:

// 输入: [1,3,5,6], 7
// 输出: 4
// 示例 4:

// 输入: [1,3,5,6], 0
// 输出: 0

// 二分查找思路

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    if(right < 0) return 0
    if(right === 0) return nums[0] > target ? 0 : 1
    while(left <= right){
        if(nums[left] < target){
            left++
        }
        if(nums[right] > target){
            right--
        }
        if(nums[left] === target){
            return left
        }
        if(nums[right] === target){
            return right
        }
    }
    if(right === nums.length - 1) return nums.length
    return left
};

console.log(searchInsert([1,3,5,6], 0))