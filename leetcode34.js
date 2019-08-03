// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 你的算法时间复杂度必须是 O(log n) 级别。

// 如果数组中不存在目标值，返回 [-1, -1]。

// 示例 1:

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: [3,4]
// 示例 2:

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 时间O(n) 空间O(1)
// var searchRange = function (nums, target) {
//     let left = 0
//     let right = nums.length
//     while (nums[left] !== nums[right] && left < right) {
//         if (nums[left] !== target) {
//             left++
//         }
//         if (nums[right] !== target) {
//             right--
//         }
//     }
//     left = nums[left] === target ? left : -1
//     right = nums[right] === target ? right : -1
//     return [left, right]
// };

// 时间O(2logN) 空间O(1)
var searchRange = function (nums, target) {
    let left = findLeft(nums, target)
    let right = findRight(nums, target)
    return [left, right]
};

var findLeft = function (nums, target) {
    let left = 0
    let right = nums.length
    let mid = null
    while (left < right) {
        mid = (left + right) >> 1;
        if (target > nums[mid]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return nums[left] === target ? left : -1;
}

var findRight = function (nums, target) {
    let left = 0
    let right = nums.length
    let mid = null
    while (left < right) {
        mid = (left + right) >> 1;
        if (target >= nums[mid]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return nums[left - 1] === target ? left - 1 : -1;
}
console.log(searchRange([5, 7, 7, 8, 8, 10], 8))