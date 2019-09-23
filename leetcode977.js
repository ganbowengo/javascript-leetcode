// 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

//  

// 示例 1：

// 输入：[-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 示例 2：

// 输入：[-7,-3,2,3,11]
// 输出：[4,9,9,49,121]
//  

// 提示：

// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A 已按非递减顺序排序。

// 链接：https://leetcode-cn.com/problems/squares-of-a-sorted-array

/**
 * @param {number[]} A
 * @return {number[]}
 */
// var sortedSquares = function(A) {
//     let len = A.length
//     let i = 0
//     while(i < len) {
//         A[i] = Math.pow(A[i],2)
//         i++
//     }
//     A.sort((a,b) => a - b)
//     return A
// };

var sortedSquares = function (A) {
    let len = A.length
    let right = len - 1
    let left = 0
    let arr = new Array(len)
    while (left <= right) {
        if (Math.pow(A[left], 2) < Math.pow(A[right], 2)) {
            arr[--len] = Math.pow(A[right], 2)
            right--
        } else {
            arr[--len] = Math.pow(A[left], 2)
            left++
        }
    }
    return arr
};


console.log(sortedSquares([-4, -1, 0, 3, 10]))