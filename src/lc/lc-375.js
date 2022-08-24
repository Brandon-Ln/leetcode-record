/**
 * @param {number} n
 * @return {number}
 */
const getMoneyAmount = function (n) {
  const memo = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(-1)); // 记忆化搜索
  const DFS = (left, right) => {
    // 递归出口
    if (right <= left) {
      return 0;
    }
    if (memo[left][right] !== -1) {
      return memo[left][right];
    }
    for (let select = left; select <= right; select++) {
      // 以 select 作为分割点
      const curr =
        Math.max(DFS(left, select - 1), DFS(select + 1, right)) + select;
      const res = Math.min(
        curr,
        memo[left][right] === -1 ? Infinity : memo[left][right]
      );
      memo[left][right] = res;
    }
    return memo[left][right];
  };
  return DFS(1, n);
};
