// @ts-check

/**
 * @see {@link https://leetcode.cn/problems/recover-binary-search-tree/}
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  /**
   * 中序遍历一颗二叉搜索树，
   * 应该能得到一个单调递增的序列，
   * 已知题目中只有恰好两个节点的值被错误地交换，
   * 因此中序遍历，交换没有单调递增节点即可
   */

  /**
   * @type {TreeNode | undefined}
   */
  let errNode1;
  /**
   * @type {TreeNode | undefined}
   */
  let errNode2;

  /**
   * @type {TreeNode}
   */
  let preNode = { left: null, val: -Infinity, right: null };

  /**
   * 中序遍历
   * @param {TreeNode | null} currRoot
   * @returns {void}
   */
  const traverse = (currRoot) => {
    if (!currRoot) {
      return;
    }
    traverse(currRoot.left);
    /**
     * 如果发现不是单调递增的元素，
     * 则进行记录
     */
    if (preNode.val >= currRoot.val && !errNode1) {
      errNode1 = preNode;
    }
    if (preNode.val >= currRoot.val) {
      errNode2 = currRoot;
    }

    preNode = currRoot;

    traverse(currRoot.right);
  };

  traverse(root);
  /**
   * 交换记录结果
   */
  if (errNode1 && errNode2) {
    const temp = errNode1.val;
    errNode1.val = errNode2.val;
    errNode2.val = temp;
  }
};

recoverTree({
  val: 6,
  left: null,
  right: {
    val: 3,
    left: null,
    right: null,
  },
});
