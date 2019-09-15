// 给定一个链表，判断链表中是否有环。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
// 示例 1：

// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。


// 示例 2：

// 输入：head = [1,2], pos = 0
// 输出：true
// 解释：链表中有一个环，其尾部连接到第一个节点。

// 示例 3：

// 输入：head = [1], pos = -1
// 输出：false
// 解释：链表中没有环。

// 进阶：
// 你能用 O(1)（即，常量）内存解决此问题吗？
// 链接：https://leetcode-cn.com/problems/linked-list-cycle


/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//     let slow = head && head.next
//     let fast = head && head.next && head.next.next
//     while (slow != fast && slow && fast) {
//         slow = slow && slow.next
//         fast = fast && fast.next && fast.next.next
//     }
//     return slow === fast && !!slow && !!fast
// };


var hasCycle = function (head) {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) return true
    }
    return false
};