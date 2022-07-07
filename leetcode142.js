/*
 * @Author       : ganbowen
 * @Date         : 2019-10-27 15:05:01
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-07 14:29:58
 * @Descripttion : 
 */
// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

// 说明：不允许修改给定的链表。

//  

// 示例 1：

// 输入：head = [3,2,0,-4], pos = 1
// 输出：tail connects to node index 1
// 解释：链表中有一个环，其尾部连接到第二个节点。


// 示例 2：

// 输入：head = [1,2], pos = 0
// 输出：tail connects to node index 0
// 解释：链表中有一个环，其尾部连接到第一个节点。


// 示例 3：

// 输入：head = [1], pos = -1
// 输出：no cycle
// 解释：链表中没有环。


//  

// 进阶：
// 你是否可以不用额外空间解决此题？

// 链接：https://leetcode-cn.com/problems/linked-list-cycle-ii

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const createNodeList = require('./tool/createListNode')
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function (head) {
//     let slow = head
//     let fast = head
//     let flag = true
//     while (fast && fast.next) {
//         if (flag) {
//             slow = slow.next
//             fast = fast.next.next
//         } else {
//             fast = head.next
//             slow = slow.next
//             if (head === slow) return slow
//             continue
//         }
//         if (fast === slow) {
//             fast = head
//             flag = false
//         }
//     }
//     return null
// };

createNodeList([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(detectCycle())

/*
    fast 快指针  slow 慢指针
    环入口为 k  环长为 b  相遇在 a
    2(k + nb + a) = k + xb + a
    k = 2nb - xb - a
    ...
    k = b - a
    -----------------------
    k + b + a = 2(k+a)
    k = (b - a)

F为起点到入口的长度 a为在环内相遇的长度 b为环长减去相遇的长度  n1位慢指针走的圈数  n2为快指针走的圈数

2(F+ n1(a+b) + a) = F + n2(a+b) + a

2(F + n1*(a+b)+ a) = (F+ n2*(a+b)+a)
2F + 2*n1*(a+b) + 2a = F + n2*(a+b) + a
F + 2*n1*(a+b) + a = n2*(a+b) 
F =  (n2-2*n1)(a+b) - a
F =  (n2-2*n1)(a+b) - a - b + b
F =  (n2-2*n1-1)(a+b) + b

X = n2-2*n1-1 // X为圈数
a+b = c // 一圈

F = Xc+b  // Xc相当于旋转的X个360度 所以还是在原地 可以舍去

F = b


入口的长度 等于 环长 - 相遇长度
 */


var detectCycle = function (head) {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        // 相遇点
        if (slow === fast) {
            // 回到起点
            let index1 = head
            // 保持相遇点
            let index2 = fast
            // 同步向后走 相同的长度 必定会再次相遇 相遇点为环入口
            while (index1 !== index2) {
                index1 = index1.next
                index2 = index2.next
            }
            return index1
        }
    }
    return null
};


createNodeList([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(detectCycle())