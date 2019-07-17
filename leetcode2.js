// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

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

let a = new listNode(1)
let b = a.next = new listNode(0)
let e = b.next = new listNode(0)
let f = e.next = new listNode(0)
let g = f.next = new listNode(0)
let h = f.next = new listNode(0)
h.next = new listNode(1)

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

var linkedToNum = function (linked){
    let arr = []
    while(linked && typeof linked.val === 'number'){
        arr.unshift(linked.val)
        linked = linked.next
    }
    return arr.join('')
}

var add = function (a, b) { //两个字符串相加
    parseInt
    var res = '', c = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop()
        res = c % 10 + res
        c = c > 9
    }
    return (a-0) + (b-0)
}

var addTwoNumbers = function(l1, l2) {
    let arr1 = linkedToNum(l1)
    let arr2 = linkedToNum(l2)
    let sum = add(arr1,arr2)
    sum = (sum).split('').map(function(item,index){
        return new listNode(item)
    })
    for(let i = sum.length-1;i>0;i--){
        sum[i].next = sum[i-1]
    } 
    return sum[sum.length - 1]
};

console.log(addTwoNumbers(a,c))
// addTwoNumbers(a,c)
