/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function (baseCosts, toppingCosts, target) {
  let res = Infinity;
  const DFS = (currCost, nextPointer) => {
    if (Math.abs(target - currCost) < Math.abs(target - res)) {
      res = currCost;
    } else if (
      Math.abs(target - currCost) === Math.abs(target - res) &&
      currCost < res
    ) {
      res = currCost;
    }
    // 递归出口
    if (currCost >= target || nextPointer === toppingCosts.length) {
      return;
    }
    // 枚举所有场景
    DFS(currCost + toppingCosts[nextPointer], nextPointer + 1);
    DFS(currCost + toppingCosts[nextPointer] * 2, nextPointer + 1);
    DFS(currCost, nextPointer + 1);
  };
  for (let i = 0; i < baseCosts.length; i++) {
    const currBase = baseCosts[i];
    // 剪枝条件
    if (res === target) {
      return target;
    } else {
      DFS(currBase, 0);
    }
  }
  return res;
};

closestCost([3, 2], [3], 10);
