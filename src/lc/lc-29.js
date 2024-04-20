// @ts-check

/**
 * @see {@link https://leetcode.cn/problems/combination-sum/?envType=daily-question&envId=2024-04-20}
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  /**
   * 使用深度优先遍历解决，
   * 在每轮搜索的过程中，维护当前的路径，并遍历剩余的候选数组，
   * 当加上当前候选数为 target 的时候，说明该路径为有效路径，加入结果，
   * 如果小于 target 的时候说明可以继续往下搜索；
   * 如果大于 target 时，进行剪枝，
   * 为了防止重复搜索，在每轮 DFS 的起点处需要记录当前的开始索引，只能从开始索引往后搜
   */

  /**
   * @type {number[][]}
   */
  const result = [];

  /**
   * @param {number} startIndex
   * @param {number[]} currPath
   */
  const DFS = (startIndex, currPath) => {
    const currSum = currPath.reduce((a, b) => a + b, 0);
    for (let i = startIndex; i < candidates.length; i++) {
      /**
       * 有效的组合
       */
      if (currSum + candidates[i] === target) {
        result.push([...currPath, candidates[i]]);
        /**
         * 可以选择当前节点继续往下搜索，
         * 为防止重复搜索，只允许往后选候选数
         */
      } else if (currSum + candidates[i] < target) {
        DFS(i, [...currPath, candidates[i]]);
      }
      // 剪枝
    }
  };

  /**
   * 开始执行搜索
   */
  DFS(0, []);

  return result;
};
