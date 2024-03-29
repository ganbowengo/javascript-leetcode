/*
 * @Author       : ganbowen
 * @Date         : 2019-10-27 15:05:01
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-07 10:03:07
 * @Descripttion : 
 */
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

// 二分查找思路--了解一下

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 时间O(n) 空间 O(1) 
// var searchInsert = function(nums, target) {
//     let left = 0
//     let right = nums.length - 1
//     if(right < 0) return 0
//     if(right === 0) return nums[0] > target ? 0 : 1
//     while(left <= right){
//         if(nums[left] < target){
//             left++
//         }
//         if(nums[right] > target){
//             right--
//         }
//         if(nums[left] === target){
//             return left
//         }
//         if(nums[right] === target){
//             return right
//         }
//     }
//     if(right === nums.length - 1) return nums.length
//     return left
// };

// var searchInsert = function (nums, target) {
//     let left = 0
//     let right = nums.length - 1
//     if (right < 0) return 0
//     if (right === 0) return target > nums[0] ? 1 : 0
//     let mid = null
//     while (left <= right) {
//         mid = (left + right) >> 1;
//         if (target === nums[mid]) {
//             return mid
//         } else if (target > nums[mid]) {
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }
//     }
//     return left
// };



var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length
    if(right === 0) return 0
    if(right === 1) return target > nums[0] ? 1 : 0
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        console.log('mid', mid)
        if(target ===  nums[mid]) {
            return mid
        }
        if(target > nums[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
};

console.log(searchInsert([1,3], 2))
