// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。

// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 示例 :

// 给定这个链表：1->2->3->4->5

// 当 k = 2 时，应当返回: 2->1->4->3->5

// 当 k = 3 时，应当返回: 3->2->1->4->5

// 说明 :

// 你的算法只能使用常数的额外空间。
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

function listNode(val) {
    this.val = val;
    this.next = null;
}

let a = new listNode(1)
let b = a.next = new listNode(2)
let e = b.next = new listNode(3)
let k = e.next = new listNode(4)
k.next = new listNode(5)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let index = head;
    if (!canReverse(index, k)) {
        return head;
    }
    let listnode = {}
    listnode.next = head
    index = head
    let pre = null
    let i = 1
    while (i++ <= k) {
        let after = index.next;
        index.next = pre
        pre = index
        index = after
    }
    head.next = reverseKGroup(index, k);
    listnode.next = pre;
    return listnode.next;
};

var canReverse = function (head, k) {
    let i = 1
    while (head && i <= k) {
        head = head.next
        i++
    }
    return i > k
}

function reserve(head, k) {
    let index = head
    if (!canReverse(index, k)) {
        return head;
    }
    let list = head
    index = head
    let prev = null
    let i = k
    while (i--) {
        let after = index.next
        index.next = prev
        prev = index
        index = after
    }
    head.next = reserve(index, k)
    list = prev
    return list
}

console.log(reserve(a, 2))