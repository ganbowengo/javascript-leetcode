// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// 思路 确定每个坐标 然后以双指针的形式向中间移动

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) return []
    nums.sort((a, b) => a - b);
    let len = nums.length
    let aggregate = []
    if (nums[0] > 0 || nums[len - 1] < 0) return []
    if (nums[0] === 0 && nums[len - 1] === 0) return [
        [0, 0, 0]
    ]
    let prev = []
    for (let i = 0; i < len; i++) {
        let _this = nums[i]
        if(_this > 0) break
        if(i > 0 && nums[i] === nums[i-1]) continue;
        for (let l = i + 1,r = len-1; l < r;) {
            let sum = _this + nums[l] + nums[r]
            if(sum === 0){
                aggregate.push([_this, nums[l], nums[r]])
                while (l < r && nums[l] == nums[l+1]) l++; // 去重
                while (l < r && nums[r] == nums[r-1]) r--; // 去重
                l++;
                r--;
            }
            else if (sum < 0) l++;
            else if (sum > 0) r--;
        }
    }
    return aggregate
};

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))