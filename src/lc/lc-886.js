/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  // 初始化不喜欢列表
  const formatDislikes = new Array(n).fill(-1).map(() => []);
  for (let i = 0; i < dislikes.length; i++) {
    formatDislikes[dislikes[i][0] - 1].push(dislikes[i][1] - 1);
    formatDislikes[dislikes[i][1] - 1].push(dislikes[i][0] - 1);
  }
  // 初始化颜色列表
  // 0 未染色、1、2 已染色
  const colors = new Array(n).fill(0);
  function DFS(index, color) {
    colors[index] = color;
    for (let i = 0; i < formatDislikes[index].length; i++) {
      if (colors[formatDislikes[index][i]] === color) {
        return false;
      } else if (
        colors[formatDislikes[index][i]] === 0 &&
        !DFS(formatDislikes[index][i], 3 - color)
      ) {
        return false;
      }
    }
    return true;
  }
  for (let i = 0; i < colors.length; i++) {
    if (colors[i] === 0 && !DFS(i, 1)) {
      return false;
    }
  }
  return true;
};

possibleBipartition(4, [
  [1, 2],
  [1, 3],
  [2, 4],
]);
