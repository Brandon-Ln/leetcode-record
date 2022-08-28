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
var widthOfBinaryTree = function (root) {
  let res = 1;
  const queue = [[root, 0]];
  while (queue.length > 0) {
    const currLen = queue.length;
    for (let i = 0; i < currLen; i++) {
      const [currNode, currIndex] = queue.shift();
      if (currNode.left) {
        queue.push([currNode.left, currIndex * 2]);
      }
      if (currNode.right) {
        queue.push([currNode.right, currIndex * 2 + 1]);
      }
    }
    if (queue.length > 0) {
      const [, leftIndex] = queue[0];
      const [, rightIndex] = queue[queue.length - 1];
      res = Math.max(res, rightIndex - leftIndex + 1);
    }
  }
  return res;
};
