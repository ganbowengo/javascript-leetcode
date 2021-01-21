/*
 * @Descripttion: 
 * @Author: ganbowen
 * @Date: 2019-10-27 15:05:01
 * @LastEditors: ganbowen
 * @LastEditTime: 2021-01-19 19:19:45
 */
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// function twoSum(nums, target) {
//     var result;
//     for(var i = 0,l = nums.length;i < l;i++){
//         for(var j = i+1;j<l;j++){
//             if(target === nums[i] + nums[j]){
//                 return [i,j]
//             }
//         }
//     }
//     return result;
// }

var twoSum = function (nums, target) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var remainder = target - nums[i];
        var index = nums.indexOf(remainder);
        if (index >= 0 && i !== index) {
            result = [i, index];
            break;
        };
    };
    return result;
};
var a = twoSum([3, 3], 6)

console.log(a)

var twoSum2 = function (nums, target) {
    var result = [];
    var con = new Map()
    for (var i = 0; i < nums.length; i++) {
        if (con.has(nums[i])) {
            return [con.get(nums[i]), i]
        }
        con.set(target - nums[i], i)
    };
    return result;
};
var a = twoSum2([2, 7, 11, 15], 9)
console.log('aaaa', a)