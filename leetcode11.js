// https://leetcode-cn.com/problems/container-with-most-water/

// 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。

// 图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

// 示例:

// 输入: [1,8,6,2,5,4,8,3,7]
// 输出: 49

// 两数中的纵坐标 * 两数中的横坐标相减

/**
 * @param {number[]} height
 * @return {number}
 */
// let maxArea = function (height) {
//     let max = 0
//     for (let j = 0, l = height.length; j < l; j++) {
//         let len = height.length - 1
//         for (let i = j; i < len; ) {
//             let lastX = height[++i]
//             let y = height[j] > lastX ? lastX : height[j]
//             let x = i - j
//             max = Math.max(x * y, max)
//         }
//     }
//     return max
// };

// 双指针
// 保持y坐标高的下标不动 低的坐标向左或向右
// let maxArea = function (height) {
//     let max = 0,
//         l = 0,
//         r = height.length - 1
//     while (l < r) {
//         max = Math.max(max, (r - l) * Math.min(height[r], height[l]))
//         if (height[l] < height[r]) {
//             l++
//         } else {
//             r--
//         }
//     }
//     return max
// };

var maxArea = function(arr = []) {
    var l = 0;
    var r = arr.length - 1;

    return loop(l, r, 0);
    function loop(l, r, max) {
        if (l === r) return max;
        var pre = arr[l];
        var next = arr[r];
        var min = pre > next ? next : pre;
        var sum = min * (r - l);

        max = max > sum ? max : sum;
        if (pre > next) return loop(l, r - 1, max);
        else return loop(l + 1, r, max);
    }
};


console.log(maxArea([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))