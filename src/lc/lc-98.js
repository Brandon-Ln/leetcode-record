// @ts-check

/**
 * @see {@link https://leetcode.cn/problems/validate-binary-search-tree/}
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
var isValidBST = function (root) {
  /**
   * 使用深度优先搜索进行判断
   * @param {TreeNode | null} currRoot
   * @param {number} leftBounds
   * @param {number} rightBound
   * @returns {boolean}
   */
  const DFS = (currRoot, leftBounds, rightBound) => {
    /**
     * 判断这棵树是不是二叉搜索树，
     * 要求左边的节点值一定要小于当前节点。
     * 右边的节点值一定要大于当前节点，
     * 同时左子树和右子树都满足二叉搜索树，
     * 上述子问题满足递归条件
     */
    if (!currRoot) {
      return true;
    }
    /**
     * 递归左子树时，
     * 将右边界更新为当前值；
     * 递归右子树时，
     * 将做区间更新为当前值
     */
    return (
      currRoot.val > leftBounds &&
      currRoot.val < rightBound &&
      DFS(currRoot.left, leftBounds, currRoot.val) &&
      DFS(currRoot.right, currRoot.val, rightBound)
    );
  };

  return DFS(root, -Infinity, Infinity)
};
