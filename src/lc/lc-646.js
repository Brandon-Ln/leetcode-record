/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  const sortedPairs = pairs.sort((pairA, pairB) => pairA[1] - pairB[1]);
  let res = 1;
  let currLast = sortedPairs[0][1];
  for (let i = 1; i < sortedPairs.length; i++) {
    if (sortedPairs[i][0] > currLast) {
      res++;
      currLast = sortedPairs[i][1];
    }
  }
  return res;
};

findLongestChain([
  [1, 2],
  [2, 3],
  [3, 4],
]);
