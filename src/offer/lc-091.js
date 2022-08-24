/**
 * @param {number[][]} costs
 * @return {number}
 */
const minCost = function (costs) {
  const redKey = 0;
  const blueKey = 1;
  const greenKey = 2;
  // initialize dp
  const dp = new Array(costs.length).fill(0).map(() => new Array(3).fill(0));
  for (let i = 0; i < 3; i++) {
    dp[0][i] = costs[0][i];
  }
  // state transfer
  for (let i = 1; i < costs.length; i++) {
    dp[i][redKey] =
      Math.min(dp[i - 1][blueKey], dp[i - 1][greenKey]) + costs[i][redKey];
    dp[i][blueKey] =
      Math.min(dp[i - 1][redKey], dp[i - 1][greenKey]) + costs[i][blueKey];
    dp[i][greenKey] =
      Math.min(dp[i - 1][redKey], dp[i - 1][blueKey]) + costs[i][greenKey];
  }
  // get the result
  return Math.min(...dp[costs.length - 1]);
};

for (var i = 0; i < 5; i++) {
  (function () {
    var curr = i;
    setTimeout(() => {
      console.log(curr);
    }, curr * 1000);
  })();
}
