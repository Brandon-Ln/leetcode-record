/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const res = [];
  let pointer = 0;
  // double pointer
  for (let i = 1; i <= n; i++) {
    if (i === target[pointer]) {
      res.push("Push");
      pointer++;
    } else if (i < target[pointer]) {
      res.push("Push");
      res.push("Pop");
    }
  }
  return res;
};
