/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (n, trust) {
  // 统计出度和入度
  const outs = new Array(n + 1).fill(0);
  const ins = new Array(n + 1).fill(0);
  for (let i = 0; i < trust.length; i++) {
    const person = trust[i][0];
    const trusted = trust[i][1];
    outs[person]++;
    ins[trusted]++;
  }
  // 统计出入度，当存在一个节点被所有人信任，但自己不信任任何人时，这个人就是法官
  for (let i = 0; i < n; i++) {
    if (outs[i] === 0 && ins[i] === n - 1) {
      return i;
    }
  }
  return -1;
};

findJudge(2, [[1, 2]]);
