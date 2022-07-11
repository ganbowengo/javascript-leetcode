/*
 * @Author       : ganbowen
 * @Date         : 2022-07-11 09:58:30
 * @LastEditors  : ganbowen
 * @LastEditTime : 2022-07-11 10:45:04
 * @Descripttion : 
 */
// 589. N 叉树的前序遍历
// 给定一个 n 叉树的根节点  root ，返回 其节点值的 前序遍历 。

// n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。


// 示例 1：



// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：[1,3,5,6,2,4]
// 示例 2：



// 输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// 输出：[1,2,3,6,7,11,14,4,8,12,5,9,13,10]
//  

// 提示：

// 节点总数在范围 [0, 104]内
// 0 <= Node.val <= 104
// n 叉树的高度小于或等于 1000

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// var preorder = function (root) {
//     let result = []
//     if (root === null) return result
//     for (let i = 0; i < length; i++) {
//         const curr = root.children[i]
//         result = result.concat(preorder(curr))
//     }
//     return result
// };



var preorder = function (root) {
    let result = []
    const stack = []
    stack.push(root)
    while (stack.length) {
        const node = stack.pop()
        if (!node) continue
        console.log('node', node)
        result.push(node.val)
        for (let i = node.children.length; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }
    return result
};


console.log('preorder', preorder({
    val: 1,
    children: [
        {
            val: 3, children: [
                { val: 5, children: [] },
                { val: 6, children: [] }
            ]
        },
        { val: 2, children: [] },
        { val: 4, children: [] }
    ]
}))