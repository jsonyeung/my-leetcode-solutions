/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == null) return 0

    let queue = [root]
    let level = 0

    while (queue.length > 0) {
        let count = queue.length

        for (let i = 0; i < count; i++) {
            let node = queue.shift()

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        level++
    }

    return level
};