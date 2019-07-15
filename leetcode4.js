// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

// 你可以假设 nums1 和 nums2 不会同时为空。

// 示例 1:

// nums1 = [1, 3]
// nums2 = [2]

// 则中位数是 2.0
// 示例 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// 则中位数是 (2 + 3)/2 = 2.5


// var findMedianSortedArrays = function(nums1, nums2) {
//     let result = []
//     let Median
//     while (nums1.length > 0 && nums2.length > 0) {
//         if (nums1[0] < nums2[0]) {
//             result.push(nums1.shift())
//         } else {
//             result.push(nums2.shift())
//         }
//     }
//     result = result.concat(nums1).concat(nums2)
//     let length = result.length
//     let index = length % 2
//     let MedianIndex = Math.floor((length-1)/2)
//     if(index){
//         Median = result[MedianIndex]
//     } else {
//         Median = (result[MedianIndex] + result[MedianIndex+1]) /2
//     }
//     return Median
// };

var findMedianSortedArrays = function (nums1, nums2) {
    let lengthSum = nums1.length + nums2.length
    let MedianIndex = Math.floor((lengthSum - 1) / 2)
    let i = 0, left, current
    while (nums1.length > 0 && nums2.length > 0) {
        current = nums1[0] < nums2[0] ? nums1.shift() : nums2.shift()
        if (lengthSum % 2) {
            if (i === MedianIndex) {
                return current
            }
        } else {
            if (i === MedianIndex) {
                left = current
            }
            if (i === MedianIndex + 1) {
                return (left + current) / 2
            }
        }
        i++
    }
    if (left || left === 0) {
        return nums1.length ? (left + nums1[0]) / 2 : (left + nums2[0]) / 2
    }
    MedianIndex = MedianIndex - i

    if (lengthSum % 2) { // jishu
        return nums1.length ? nums1[MedianIndex] : nums2[MedianIndex]
    } else {
        return nums1.length ? (nums1[MedianIndex] + nums1[MedianIndex+ 1]) /2 : (nums2[MedianIndex] + nums2[MedianIndex+ 1]) /2 
    }
    return 0.0
};

let s = findMedianSortedArrays([1, 2], [3])
console.log(s)