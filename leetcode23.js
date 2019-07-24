// 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

// 示例:

// 输入:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 输出: 1->1->2->3->4->4->5->6

function listNode(val) {
    this.val = val;
    this.next = null;
}

let a = new listNode(1)
let b = a.next = new listNode(2)
let e = b.next = new listNode(3)
e.next = new listNode(4)

let g = new listNode(5)
let h = g.next = new listNode(6)
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */



// 归并排序 第一次提交最终结果正确 但是栈溢出
var mergeKLists = function(lists) {
    return splitArr(lists)
};


function splitArr(lists){
    // 优化之后提交成功
    switch(lists.length) {
        case 0:
            return null;
        case 1:
            return lists[0];
        case 2:
            return merge(lists[0], lists[1]);
        default: 
            let mid = lists.length >> 1;
            return merge(splitArr(lists.slice(0,mid)) , splitArr(lists.slice(mid, lists.length)))
    }
}

function merge(left, right) {
    let listnode = {}
    let t = listnode
    while (left && right) {
        if (left.val > right.val) {
            listnode.next = right
            right = right.next
        } else {
            listnode.next = left
            left = left.next
        }
        listnode = listnode.next
    }
    if(left){
        listnode.next = left
    }
    if(right){
        listnode.next = right
    }
    return t.next || null
}

console.log('123', JSON.stringify(mergeKLists([a, g, c])))