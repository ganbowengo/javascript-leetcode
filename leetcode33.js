// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

// 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

// 你可以假设数组中不存在重复的元素。

// 你的算法时间复杂度必须是 O(log n) 级别。

// 示例 1:

// 输入: nums = [4,5,6,7,0,1,2], target = 0
// 输出: 4
// 示例 2:

// 输入: nums = [4,5,6,7,0,1,2], target = 3
// 输出: -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let num = -1
    let left = []
    let right = []
    let mid = 1
    while (mid) {
        mid = nums.length >> 1;
        left = nums.slice(0, mid)
        right = nums.slice(mid, nums.length)
        console.log('num', left, right, mid)
        if (target === left[0]) {
            num += 1
            return num
        }
        if (target === left[left.length - 1]) {
            num += left.length
            return num
        }
        if (left[0] < left[left.length - 1]) {
            if (left[0] < target && target < left[left.length - 1]) {
                nums = left
                continue
            } else {
                num += mid
                nums = right
                continue
            }
        } else {
            if (left[0] > target && target < left[left.length - 1] && left.length !== 1) {
                nums = left
                continue
            }
        }
        
        if (target === right[0]) {
            num += mid + 1
            return num
        }
        if (target === right[right.length - 1]) {
            num += mid + right.length
            return num
        }
        if (right[0] < right[right.length - 1]) {
            if (right[0] < target && target < right[right.length - 1]) {
                num += mid
                nums = right
                continue
            } else {
                nums = left
                continue
            }
        } else {
            if (right[0] > target && target < right[right.length - 1] && right.length !== 1) {
                num += mid
                nums = right
                continue
            }
        }
        return -1
    }
    return num
};

console.log(search([2,3,4,5,6,7,8,9,1],9))