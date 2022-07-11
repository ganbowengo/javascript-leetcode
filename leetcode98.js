/*
 * @Author       : ganbowen
 * @Date         : 2022-07-11 11:24:40
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-11 14:23:47
 * @Descripttion : 
 */
// 98. 验证二叉搜索树
// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

// 有效 二叉搜索树定义如下：

// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。


// 示例 1：


// 输入：root = [2,1,3]
// 输出：true
// 示例 2：


// 输入：root = [5,1,4,null,null,3,6]
// 输出：false
// 解释：根节点的值是 5 ，但是右子节点的值是 4 。


// 提示：

// 树中节点数目范围在[1, 104] 内
// -231 <= Node.val <= 231 - 1

// const helper = function (root, lower, upper) {
//     if (!root) return true
//     if (root.val <= lower || root.val >= upper)
//         return false

//     return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
// };

// var isValidBST = function (root) {
//     return helper(root, -Infinity, Infinity)
// };

var isValidBST = function (root) {
    const stack = []
    let mid = root
    let min = -Infinity
    while (mid || stack.length) {
        if (mid) {
            stack.push(mid)
            mid = mid.left
        } else {
            const node = stack.pop()
            if (node.val > min) min = node.val
            else return false
            mid = node.right
        }
    }
    return true
};


console.log('isValidBST', isValidBST({
    val: 5,
    left: {
        val: 4,
        left: { val: 1 },
    },
    right: {
        val: 6,
        left: { val: 3 },
        right: { val: 7 }
    }
}))