/**
 * @see {@link https://leetcode.cn/problems/minimum-height-trees/?envType=daily-question&envId=2024-03-17}
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  /**
   * @type {number[]}
   */
  const depthTuple = new Array(n).fill(0);
  /**
   * @type {WeakSet<[number, number]>}
   */
  const memorizedPathSet = new WeakSet(); // 缓存访问过的边 tuple

  /**
   * @param {number} currNode
   * @param {number[][]} edges
   * @param {number} currDepth
   * @returns {number}
   */
  function DFS(currNode, edges, currDepth) {
    const heights = [currDepth];
    for (let i = 0; i < edges.length; i++) {
      if (edges[i].includes(currNode) && !memorizedPathSet.has(edges[i])) {
        memorizedPathSet.add(edges[i]); // 添加访问过的边
        heights.push(
          DFS(
            edges[i][0] === currNode ? edges[i][1] : edges[i][0],
            edges,
            currDepth + 1
          )
        );
        memorizedPathSet.delete(edges[i]); // 释放访问过的边，状态重置
      }
    }
    /**
     * 递归出口，
     * 返回当前节点路径的最长距离即为树的高度
     */
    return Math.max(...heights);
  }

  for (let i = 0; i < n; i++) {
    depthTuple[i] = DFS(i, edges, 0);
  }

  const minDepth = Math.min(...depthTuple);
  return depthTuple.reduce((preRet, currValue, index) => {
    if (currValue === minDepth) {
      preRet.push(index);
    }
    return preRet;
  }, []);
};

findMinHeightTrees(6, [
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 4],
  [5, 4],
]);
