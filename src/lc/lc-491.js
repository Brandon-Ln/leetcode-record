/**
 * @param {character[][]} board
 * @return {number}
 */
const countBattleships = function (board) {
  let count = 0;
  // 循环矩阵
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (row - 1 >= 0 && board[row - 1][col] === "X") continue;
      if (col - 1 >= 0 && board[row][col - 1] === "X") continue;
      if (board[row][col] === "X") count++;
    }
  }
  return count;
};

countBattleships([
  ["X", ".", ".", "X"],
  [".", ".", ".", "X"],
  [".", ".", ".", "X"],
]);
