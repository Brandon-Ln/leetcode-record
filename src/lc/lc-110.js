// @ts-check

/**
 * @see {@link https://leetcode.cn/problems/balanced-binary-tree/}
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
 * @param {TreeNode | null} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  /**
   * get the height of current Tree
   * @param {TreeNode | null} curr
   * @returns {number}
   */
  const getTreeHeight = (curr) => {
    if (!curr) {
      return 0;
    }

    return 1 + Math.max(getTreeHeight(curr.left), getTreeHeight(curr.right));
  };

  if (!root) {
    return true;
  }

  let leftH = 0;
  if (root.left) {
    leftH = getTreeHeight(root.left);
  }

  let rightH = 0;
  if (root.right) {
    rightH = getTreeHeight(root.right);
  }

  return (
    Math.abs(leftH - rightH) <= 1 &&
    /**
     * 注意平衡树不仅要保证当前节点高度是平衡的，
     * 还需要保证左子树和右子树是平衡的
     */
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};
