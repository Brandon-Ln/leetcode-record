/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
const longestDiverseString = function (a, b, c) {
  let res = "";
  // 当所有数全部用完时跳出循环
  while (a > 0 || b > 0 || c > 0) {
    const last2Letters = res.slice(-2);
    const transformA = last2Letters === "aa" ? -1 : a;
    const transformB = last2Letters === "bb" ? -1 : b;
    const transformC = last2Letters === "cc" ? -1 : c;
    const maxCount = Math.max(transformA, transformB, transformC);
    // 终止场景
    if (transformA + transformB + transformC === -1) break;
    if (maxCount === transformA) {
      res += "a";
      a--;
    } else if (maxCount === transformB) {
      res += "b";
      b--;
    } else {
      res += "c";
      c--;
    }
  }
  return res;
};

longestDiverseString(1, 1, 7)

