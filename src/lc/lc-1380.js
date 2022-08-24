/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers = function (matrix) {
  const res = [];
  const minRowNumsMap = new Map();
  for (let i = 0; i < matrix.length; i++) {
    let minNum = Infinity;
    let minIndex = 0;
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] < minNum) {
        minNum = matrix[i][j];
        minIndex = j;
      }
    }
    const colNum = minRowNumsMap.get(minIndex) || -Infinity;
    minRowNumsMap.set(minIndex, Math.max(minNum, colNum));
  }

  for (const [col, num] of minRowNumsMap.entries()) {
    let currMax = num;
    for (let i = 0; i < matrix.length; i++) {
      currMax = Math.max(matrix[i][col], currMax);
    }
    if (currMax === num) {
      res.push(num);
    }
  }
  return res;
};

luckyNumbers([
  [1, 10, 4, 2],
  [9, 3, 8, 7],
  [15, 16, 17, 12],
]);
