// @ts-check

/**
 * @see {@link https://leetcode.cn/problems/symmetric-tree/}
 */

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  /**
   * @param {TreeNode | null} leftTree
   * @param {TreeNode | null} rightTree
   * @returns {boolean}
   */
  const DFS = (leftTree, rightTree) => {
    /**
     * edge case
     */
    if (!leftTree && !rightTree) {
      return true;
    } else if (!leftTree || !rightTree) {
      return false;
    }

    return (
      leftTree.val === rightTree.val &&
      (DFS(leftTree.left, rightTree.right) &&
        DFS(leftTree.right, rightTree.left))
    );
  };

  return DFS(root.left, root.right);
};
