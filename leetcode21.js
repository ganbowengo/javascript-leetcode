// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
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
var mergeTwoLists = function (l1, l2) {
    let listnode = {}
    let t = listnode
    while (l1 && l2) {
        console.log(l1.val , l2.val)
        if (l1.val > l2.val) {
            listnode.next = l2
            l2 = l2.next
        } else {
            listnode.next = l1
            l1 = l1.next
        }
        listnode = listnode.next
    }
    if(l1){
        listnode.next = l1
    }
    if(l2){
        listnode.next = l2
    }
    
    return t.next ? t.next : null
};