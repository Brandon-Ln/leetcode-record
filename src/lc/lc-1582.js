/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  const row = mat.length;
  const col = mat[0].length;
  const rowOneCount = new Array(row).fill(0);
  const colOneCount = new Array(col).fill(0);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      rowOneCount[i] += mat[i][j];
      colOneCount[j] += mat[i][j];
    }
  }
  let res = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 1 && rowOneCount[i] === 1 && colOneCount[j] === 1) {
        res++;
      }
    }
  }
  return res;
};

numSpecial([
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
]);
