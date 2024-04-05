/**
 * @see {@link https://leetcode.cn/problems/maximum-difference-between-node-and-ancestor/?envType=daily-question&envId=2024-04-05}
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
 * @typedef {object} TreeNode
 * @property {number?} val
 * @property {TreeNode?} left
 * @property {TreeNode?} right
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function (root) {
  /**
   * @param {TreeNode | null} currRoot
   * @param {number} min
   * @param {number} max
   * @returns {[number, number]}
   */
  const DFS = (currRoot, min, max) => {
    if (!currRoot) {
      return [min, max];
    }
    if (currRoot.val < min) {
      min = currRoot.val;
    }
    if (currRoot.val > max) {
      max = currRoot.val;
    }

    const [leftMin, leftMax] = DFS(currRoot.left, min, max);
    const [rightMin, rightMax] = DFS(currRoot.right, min, max);

    const leftV = Math.abs(leftMax - leftMin);
    const rightV = Math.abs(rightMax - rightMin);

    return leftV > rightV ? [leftMin, leftMax] : [rightMin, rightMax];
  };

  const [resultMin, resultMax] = DFS(root, root.val, root.val);
  return Math.abs(resultMax - resultMin);
};

maxAncestorDiff({
  val: 8,
  left: {
    val: 3,
    left: null,
    right: null,
  },
  right: null,
});
