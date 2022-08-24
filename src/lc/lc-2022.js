/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
const construct2DArray = function (original, m, n) {
  // 不能构成二维数组的场景
  if (m * n !== original.length) {
    return [];
  }
  const twoDimensionArray = new Array(m)
    .fill(-1)
    .map(() => new Array(n).fill(-1));

  for (let i = 0; i < original.length; i++) {
    twoDimensionArray[Math.floor(i / n)][i % n] = original[i];
  }
  return twoDimensionArray;
};

construct2DArray([1, 2, 3], 1, 3);
