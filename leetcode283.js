// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:

// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。


// 链接：https://leetcode-cn.com/problems/move-zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//     let length = nums.length
//     let i = 0
//     while (i < length - 1) {
//         if (nums[i] === 0) {
//             let it = nums.splice(i,1)
//             nums.push(it[0])
//             length--
//         }else{
//             i++
//         }
//     }
//     return nums
// };

var moveZeroes = function (nums) {
    let length = nums.length
    let i = 0
    let k = 0
    while (i < length) {
        if (nums[i] !== 0) {
            if(k !== i){
                let temp = nums[i]
                nums[i] = nums[k]
                nums[k] = temp
            }
            k++
        }
        i++
    }
    return nums
};

console.log(moveZeroes([0,0,1,2,3,4]))