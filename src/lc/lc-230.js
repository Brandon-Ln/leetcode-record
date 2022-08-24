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
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    const res = [];
    const DFS = (root) => {
        // 递归出口
        if(root == null || res.length === k){
            return;
        }
        DFS(root.left);
        res.push(root.val);
        DFS(root.right);
    }
    DFS(root);
    return res[res.length - 1];
};