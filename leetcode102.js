/*
 * @Author       : ganbowen
 * @Date         : 2022-07-11 10:48:22
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-11 11:17:54
 * @Descripttion : 
 */
// 102. 二叉树的层序遍历
// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。



// 示例 1：


// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]
// 示例 2：

// 输入：root = [1]
// 输出：[[1]]
// 示例 3：

// 输入：root = []
// 输出：[]


// 提示：

// 树中节点数目在范围 [0, 2000] 内
// -1000 <= Node.val <= 1000

var levelOrder = function (root) {
    const queue = []
    const result = []
    if (!root) return result
    queue.push(root)
    while (queue.length) {
        const size = queue.length
        const level = []
        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            level.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        result.push(level)
    }
    return result
};


console.log('levelOrder', levelOrder({
    val: 1,
    left: {
        val: 3,
        left: { val: 5 }
    },
    right: {
        val: 2,
        left: { val: 4 },
        right: { val: 7 }
    }
}))