// @ts-check

/**
 * @see {@link https://leetcode.cn/problems/binary-tree-right-side-view/}
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  /**
   * 使用深度优先遍历递归，
   * 一边遍历需要一边记录树的深度
   * 先遍历右子树，当右子树有值的时候，肯定使用右子树的值
   * 右子树遍历完后遍历左子树，
   * 对于左子树，只有当左子树的高度超过了当前结果长度时，才进行记录
   */

  /**
   * @type {number[]}
   */
  const views = [];

  /**
   * @param {TreeNode | null} currTree
   * @param {number} currDepth
   */
  const recordDFS = (currTree, currDepth) => {
    if (!currTree) {
      return;
    }
    if (currDepth > views.length) {
      views.push(currTree.val);
    }
    recordDFS(currTree.right, currDepth + 1);
    recordDFS(currTree.left, currDepth + 1);
  };

  recordDFS(root, 1)

  return views
};
