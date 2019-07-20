// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

// 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

// 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).


// 固定一个起点 双指针移动 
// 比较result（最接近的数） 与 target - 当前固定数与双指针数的和 的大小 
// result > sum 表示 当前的sum太小
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let result = nums[0] + nums[1] + nums[2]
    let step = Math.abs(target - result)
    let len = nums.length
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        let _this = nums[i]
        if (i > 0 && nums[i] === nums[i-1]) continue
        for (let j = i + 1, l = len - 1; j < l;) {
            let sum = _this + nums[j] + nums[l]
            let del = target - sum
            if (del === 0) {
                return target
            }
            if (del < 0) {
                l--;
            } else {
                j++;
            }
            if(Math.abs(del)<step){
                result = sum
                step=Math.abs(del);
            }
        }
    }
    return result
};

console.log(threeSumClosest([-1,2,1,-4], 1))