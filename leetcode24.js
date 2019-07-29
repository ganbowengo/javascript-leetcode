// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

//  

// 示例:

// 给定 1->2->3->4, 你应该返回 2->1->4->3.

function listNode(val) {
    this.val = val;
    this.next = null;
}

let a = new listNode(1)
let b = a.next = new listNode(2)
 b.next = new listNode(3)
// e.next = new listNode(4)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 时间复杂度 O(n) => n + 1/2 * n

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function (head) {
//     let listnode = {}
//     let t = listnode
//     let i = 1
//     let arr1 = []
//     let arr2 = []
//     while (head) {
//         if (i % 2 !== 0) { // 前一个
//             arr1.push(head)
//         } else { // 后一个
//             arr2.push(head)
//         }
//         head = head.next
//         i++
//     }
//     i = 0
//     let len = arr1.length
//     while (i < len) {
//         if (arr2[i]) {
//             if(!arr2[i].next){ // null 最后一个
//                 listnode.next = arr2[i]
//             }else{
//                 arr2[i].next = null
//                 listnode.next = arr2[i]
//             }
//             listnode = listnode.next
//         } 
//         if (arr1[i]) {
//             if(!arr1[i].next){ // null 最后一个
//                 listnode.next = arr1[i]
//             }else{
//                 arr1[i].next = null
//                 listnode.next = arr1[i]
//             }
//             listnode = listnode.next
//         } 
//         i++
//     }

//     return t.next || null
// }; 


function swapPairs(head){
    if(head == null || head.next == null){
        return head
    }
    let list = head.next
    head.next = swapPairs(list.next)
    list.next = head
    return list
}

console.log(swapPairs(a))