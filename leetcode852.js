/*
 * @Author       : ganbowen
 * @Date         : 2019-10-27 15:05:01
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-07 10:14:31
 * @Descripttion : 
 */
// 我们把符合下列属性的数组 A 称作山脉：

// A.length >= 3
// 存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
// 给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。

//  

// 示例 1：

// 输入：[0,1,0]
// 输出：1
// 示例 2：

// 输入：[0,2,1,0]
// 输出：1
//  

// 提示：

// 3 <= A.length <= 10000
// 0 <= A[i] <= 10^6
// A 是如上定义的山脉

// 链接：https://leetcode-cn.com/problems/peak-index-in-a-mountain-array
// 找到最大数的下标

/**
 * @param {number[]} A
 * @return {number}
 */
// var peakIndexInMountainArray = function(A) {
//     let left = 0
//     let right = A.length
//     while (left < right) {
//         let mid = Math.floor((left + right) / 2)
//         let it = A[mid]
//         let itr = A[mid + 1]
//         let itl = A[mid - 1]
//         if (itl < it && it < itr) { //mid 在左侧
//             left = mid + 1
//             continue
//         }
//         if (itr < it && it < itl) { //mid 在右侧
//             right = mid
//             continue
//         }
//         if(itr < it && it > itl) {
//             return mid
//         }
//     }
// };

// console.log(peakIndexInMountainArray([0, 1,3,2, 1, 0]))


var peakIndexInMountainArray = function(arr) {
    let left = 0
    let right = arr.length
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        console.log('mid', mid)
        if(arr[mid-1]< arr[mid] && arr[mid] > arr[mid + 1]) {
            return mid
        }

        if(arr[mid-1] < arr[mid] && arr[mid] < arr[mid + 1]) {
            left = mid + 1
        }

        if(arr[mid-1] > arr[mid] && arr[mid] > arr[mid + 1]) {
            right = mid
        }
    }
};
console.log(peakIndexInMountainArray([0, 1,3,2, 1, 0]))

// console.log(peakIndexInMountainArray([0,2,1,0]))
