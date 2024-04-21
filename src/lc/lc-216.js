// @ts-check

/**
 * @see {@link https://leetcode.cn/problems/combination-sum-iii/?envType=daily-question&envId=2024-04-21}
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  /**
   * 使用深度优先搜索算法求解，
   * 在每一轮搜索中，记录当前的搜索路径
   * 如果搜索路径结果满足题目要求，则加入结果数组
   * 如果当前加入值已经大于 target，则进行剪枝，
   * 如果当前加入值加入后仍然小于 target 则继续进行搜索，
   * 此外需要考虑当前选择路径大于 k 时的剪枝条场景
   */

  const endEnumNum = 9
  /**
   * @type {number[][]}
   */
  const result = [];

  /**
   * @param {number[]} currPath
   */
  const DFS = (currPath) => {
    /**
     * 当前路径的尾元素就是上个被选过的数字，
     * 从上个被选过的元素作为起点开始枚举可以防止重复搜索
     */
    const startIndex = currPath[currPath.length - 1] || 0;
    const currSum = currPath.reduce((a, b) => a + b, 0);

    /**
     * 如果当前路径长度已经为 k，则进行剪枝
     */
    if (currPath.length === k) {
      return;
    }

    /**
     * startIndex 已经被选过了，所以从 startIndex + 1 开始
     */
    for (let i = startIndex + 1; i <= endEnumNum; i++) {
      if (currSum + i === n && currPath.length + 1 === k) {
        result.push([...currPath, i]);
      } else if (currSum + i < n) {
        DFS([...currPath, i]);
      }else if(currSum + i > n){
        /**
         * 当前遍历和已经大于 target，进行剪枝
         */
        return
      }
    }
  };

  DFS([])

  return result
};
