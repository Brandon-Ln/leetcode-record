// ts-check

/**
 * @see {@link https://leetcode.cn/problems/same-tree/}
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  /**
   * edge case
   */
  if (p === null && q === null) {
    return true;
  } else if (p === null || q === null) {
    return false
  }

  return (
    q.val === p.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};
