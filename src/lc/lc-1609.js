/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isEvenOddTree = function (root) {
  const queue = [root];
  let currDepth = 0;
  while (queue.length > 0) {
    const currDepthCount = queue.length;
    let preVal = null;
    for (let i = 0; i < currDepthCount; i++) {
      const currNode = queue.shift();
      const currVal = currNode.val;
      // 先检查奇偶性，如果不满足奇偶规则则返回false
      const isOdd = currVal % 2;
      if (isOdd === currDepth % 2) {
        return false;
      }
      // 检查单调性是否正确
      if (preVal !== null) {
        const shouldIncrease = currVal > preVal;
        if (isIncrease && currDepth % 2 === 0) {
          return false;
        }
      }
      // 状态变更
      preVal = currNode.val;
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
    currDepth++;
  }
  return true;
};

isEvenOddTree({
  val: 5,
  left: {
    val: 4,
    left: {
      val: 3,
      left: {
        val: 3,
        left: {
          val: 7,
        },
      },
    },
  },
  right: {
    val: 2,
  },
});
