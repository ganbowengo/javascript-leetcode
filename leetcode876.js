/*
 * @Author       : ganbowen
 * @Date         : 2022-07-07 13:27:41
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-07 13:42:44
 * @Descripttion : 
 */
// 876. 链表的中间结点
// 给定一个头结点为 head 的非空单链表，返回链表的中间结点。

// 如果有两个中间结点，则返回第二个中间结点。



// 示例 1：

// 输入：[1,2,3,4,5]
// 输出：此列表中的结点 3 (序列化形式：[3,4,5])
// 返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
// 注意，我们返回了一个 ListNode 类型的对象 ans，这样：
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.
// 示例 2：

// 输入：[1,2,3,4,5,6]
// 输出：此列表中的结点 4 (序列化形式：[4,5,6])
// 由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。


// 提示：

// 给定链表的结点数介于 1 和 100 之间。
function listNode (val) {
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

// // 朴素解法 ： log(n + n/2)
// var middleNode = function (head) {
//     let length = 0
//     let container = head
//     while (head) {
//         head = head.next
//         length++
//     }
//     let mid = length % 2 ? length / 2 + 1 : Math.floor(length / 2)
//     while (mid--) {
//         container = container.next
//     }
//     return container
// };

// 快慢指针解法log(n/2)
var middleNode = function (head) {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};

console.log('middleNode', middleNode(a))