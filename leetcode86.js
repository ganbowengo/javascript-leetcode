// 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。

// 你应当保留两个分区中每个节点的初始相对位置。

// 示例:

// 输入: head = 1->4->3->2->5->2, x = 3
// 输出: 1->2->2->4->3->5

// 链接：https://leetcode-cn.com/problems/partition-list

let createNodeList = require('./tool/createListNode')
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let a = {}
    let left = {
        next: ''
    }
    let right = {
        next: ''
    }
    let righthead = right
    let lefthead = left
    while (head) {
        if (head.val < x) {
            left.next = head
            left = left.next
        } else {
            console.log(head.val)
            right.next = head
            right = right.next
        }
        head = head.next
        if (!head) {
            right.next = null
            left.next = null
        }
    }
    console.log(righthead,lefthead)
    left.next = righthead.next
    return lefthead.next
};


let a = createNodeList([1, 4, 3, 2, 5, 2])

console.log(partition(a, 3))