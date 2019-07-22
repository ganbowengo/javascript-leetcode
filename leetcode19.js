// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：

// 给定的 n 保证是有效的。

// 进阶：

// 你能尝试使用一趟扫描实现吗？
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function listNode(val) {
    this.val = val;
    this.next = null;
}

let a = new listNode(1)
let b = a.next = new listNode(2)
let e = b.next = new listNode(3)
let f = e.next = new listNode(4)
let g = f.next = new listNode(5)
let h = f.next = new listNode(6)
h.next = new listNode(7)

let c = new listNode(2)
let d = c.next = new listNode(3)
d.next = new listNode(4)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function listNode(val) {
    this.val = val;
    this.next = null;
}


 /**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//     let i = 1
//     let l = 1
//     let current = null
//     let first = head
//     while(head){
//         head = head.next
//         l++
//     }
//     head = first 
    
//     if(n === l - 1){
//         return first.next
//     }
//     console.log(l,n)
//     while(head){
//         if(i === (l - n - 1)){
//             current = head
//         }
//         if(i === (l - n)){
//             current.next = head.next || null
//             return first
//         }
//         head = head.next
//         i++
//     }
// };

// 升级版
var removeNthFromEnd = function(head, n) {
    let first = head
    let second = head
    while(n){
        first = first.next
        n--
    }
    while(first){
        first = first.next
        second = second.next
    }
    second.next = second.next.next
    return head
}

console.log(removeNthFromEnd(a,3))
