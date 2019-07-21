// 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

// 注意：

// 答案中不可以包含重复的四元组。

// 示例：

// 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

// 满足要求的四元组集合为：
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

// 采用双指针 先固定两个数为基数 另两个数为游标

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let len = nums.length
    if (len < 4) return []
    let l = 0
    let r = len - 1
    let aggregate = []
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            let inl = j + 1
            let inr = len - 1
            while (inl < inr) {
                sum = nums[i] + nums[j] + nums[inl] + nums[inr]
                if (sum === target) {
                    aggregate.push([nums[i], nums[j], nums[inl], nums[inr]])
                } 
                if (sum <= target) {
                    while (inl < inr && nums[inl] == nums[inl + 1]) inl++; // 去重
                    inl++;
                } else {
                    while (inl < inr && nums[inr] == nums[inr - 1]) inr--; // 去重
                    inr--;
                }
            }
        }
    }
    return aggregate
};

console.log(fourSum([-3,-2,-1,0,0,1,2,3], 0))