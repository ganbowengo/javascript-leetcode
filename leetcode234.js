// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false
// 示例 2:

// 输入: 1->2->2->1
// 输出: true
// 进阶：
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

// 链接：https://leetcode-cn.com/problems/palindrome-linked-list

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

let createListNode = require('./tool/createListNode')
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let fast = head
    let slow = head
    let result = null
    while (fast && fast.next) {
        let res = {
            val: slow.val,
            next: result
        }
        fast = fast.next.next
        slow = slow.next
        result = res
    }

    if (fast) { // 说明是奇数个
        slow = slow.next
    }
    let i = 0
    while (slow) {
        if (slow.val !== result.val) return false
        slow = slow.next
        result = result.next
        i++
    }
    return true
};

let a = new createListNode([1, -12, -12, 1])
console.time()
console.log(isPalindrome(a))
console.timeEnd()