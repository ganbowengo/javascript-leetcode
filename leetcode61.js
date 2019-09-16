// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL
// 示例 2:

// 输入: 0->1->2->NULL, k = 4
// 输出: 2->0->1->NULL
// 解释:
// 向右旋转 1 步: 2->0->1->NULL
// 向右旋转 2 步: 1->2->0->NULL
// 向右旋转 3 步: 0->1->2->NULL
// 向右旋转 4 步: 2->0->1->NULL

// 链接：https://leetcode-cn.com/problems/rotate-list
const createListNode = require('./tool/createListNode')
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

// var rotateRight = function (head, k) {
//     let first = head
//     if (!head || !head.next || !k) return head
//     let i = 1
//     while (head.next) {
//         head = head.next
//         i++
//     }
//     head.next = first
//     k = i - (k % i) // 起始位置为 总长度减去移动的步数对总长度取余
//     while (k > 0) {
//         first = first.next
//         k--
//     }
//     let s = first
//     while (true) {
//         if (--i == 0) {
//             first.next = null
//             break
//         }
//         first = first.next
//     }
//     return s
// };

var rotateRight = function (head, k) {
    let first = head
    if (!head || !head.next || !k) return head
    let i = 1
    while (head.next) {
        head = head.next
        i++
    }
    let s = head
    head.next = first
    k = i - (k % i) // 起始位置为 总长度减去移动的步数对总长度取余
    while (k > 0) {
        head = head.next // 尾部指针
        first = first.next // 头部指针
        k--
    }
    head.next = null
    return first
};



var a = createListNode([1, 2, 3])
console.time()
console.log(JSON.stringify(rotateRight(a, 1)))
console.timeEnd()