/*
 * @Description: 缺失的第一个正数
 * @Author: 甘博文
 * @Date: 2019-08-09 22:08:00
 * @LastEditTime: 2019-08-10 20:55:04
 * @LastEditors: Please set LastEditors
 */
// 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

// 示例 1:

// 输入: [1,2,0]
// 输出: 3
// 示例 2:

// 输入: [3,4,-1,1]
// 输出: 2
// 示例 3:

// 输入: [7,8,9,11,12]
// 输出: 1
// 说明:

// 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。

/**
 * @param {number[]} nums
 * @return {number}
 */
// var firstMissingPositive = function (nums) {
//     let i = 0
//     let len = nums.length
//     let current
//     let temp = null
//     while (i < len) {
//         while (nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] != nums[i]) {
//             current = nums[i] - 1
//             temp = nums[i]
//             nums[i] = nums[current]
//             nums[current] = temp
//         }
//         i++
//     }
//     for (let i = 0; i < len; i++) {
//         if (nums[i] - 1 !== i) {
//             return i + 1
//         }
//     }

//     return len + 1
// };

var firstMissingPositive = function (nums) {
    let i = 1
    let len = nums.length
    while (i <= len) {
        if(nums.indexOf(i) < 0){
            return i || 1
        }
        i++
    }
    return i
};


console.log(firstMissingPositive([3,4,-1,1]))