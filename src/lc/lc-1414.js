/**
 * @param {number} k
 * @return {number}
 */
const findMinFibonacciNumbers = function (k) {
  const fibs = [1, 1];
  // 计算到对应的斐波那契数
  while (fibs[fibs.length - 1] < k) {
    const last1 = fibs[fibs.length - 1];
    const last2 = fibs[fibs.length - 2];
    fibs.push(last1 + last2);
  }
  // 贪心算法
  let res = 0;
  let currSum = 0;
  let pointer = fibs.length - 1;
  while (currSum !== k && pointer >= 0) {
    res++;
    currSum += fibs[pointer];
    // 当前 sum 超过给定 k 时，进行状态重置
    if (currSum > k) {
      currSum -= fibs[pointer];
      pointer--;
      res--;
    }
  }
  return res;
};

findMinFibonacciNumbers(7);
