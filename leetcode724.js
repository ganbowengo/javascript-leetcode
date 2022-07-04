/*
 * @Author       : ganbowen
 * @Date         : 2022-07-04 15:58:11
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-04 17:08:57
 * @Descripttion : 
 */
// 724. 寻找数组的中心下标
// 给你一个整数数组 nums ，请计算数组的 中心下标 。

// 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

// 如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。

// 如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。

 

// 示例 1：

// 输入：nums = [1, 7, 3, 6, 5, 6]
// 输出：3
// 解释：
// 中心下标是 3 。
// 左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
// 右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。
// 示例 2：

// 输入：nums = [1, 2, 3]
// 输出：-1
// 解释：
// 数组中不存在满足此条件的中心下标。
// 示例 3：

// 输入：nums = [2, 1, -1]
// 输出：0
// 解释：
// 中心下标是 0 。
// 左侧数之和 sum = 0 ，（下标 0 左侧不存在元素），
// 右侧数之和 sum = nums[1] + nums[2] = 1 + -1 = 0 。
// 中心索引公式
// sum = 2 * leftSum + current

// 暴力解法
// var pivotIndex = function(nums) {
//     const length = nums.length
//     let leftSum = 0
//     let i = -1
//     while(i<length){
//         let j = i + 2
//         let rightSum = 0
//         while(j < length) {
//             rightSum += nums[j]
//             j++
//         }
//         leftSum += (nums[i] || 0)
//         i++
//         if (leftSum === rightSum && i !== length) {
//             return i
//         }
//     }
//     return -1
// };


var pivotIndex = function(nums) {
    const length = nums.length
    const sum = nums.reduce((sum,current) => sum +current, 0)
    let leftSum = 0
    let i = 0
    while(i < length) {
        if(2 * leftSum + nums[i] === sum) return i
        leftSum += nums[i]
        i++
    }
    return -1
};

console.log(111, pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(111, pivotIndex([1, 2, 3]))
console.log(111, pivotIndex([2, 1, -1]))
console.log(111, pivotIndex([-1,-1,-1,1,1,1]))