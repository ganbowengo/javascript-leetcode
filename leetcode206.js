/*
 * @Author       : ganbowen
 * @Date         : 2022-07-06 22:41:34
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-06 23:31:57
 * @Descripttion : 
 */
// 206. 反转链表
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 


// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]
// 示例 2：


// 输入：head = [1,2]
// 输出：[2,1]
// 示例 3：

// 输入：head = []
// 输出：[]

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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let curr = head
    while(curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next    
    }
    return prev
};

var reverseList = function(head) {
    if(head === null || head.next === null) return null
    const result = reverseList(head.next)
    head.next.next = head
    head.next = null
    return result
};
console.log('reverseList', reverseList(a))