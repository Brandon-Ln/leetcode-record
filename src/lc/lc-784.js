/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  /**
   * @param {string} letter
   * @returns {string}
   */
  const swapCase = (letter) => {
    return "a" <= letter && letter <= "z"
      ? letter.toUpperCase()
      : letter.toLowerCase();
  };

  /**
   * @param {any} target
   * @returns {boolean}
   */
  const isLetter = (target) => {
    return ("a" <= target && target <= "z") || ("A" <= target && target <= "Z");
  };

  const paths = [];
  const DFS = (index, currPath) => {
    // 递归终点
    if (index === s.length) {
      paths.push(currPath);
      return;
    }
    /**
     * 判断当前连续索引字符是否不是字母
     */
    while (!isLetter(s[index])) {
      currPath += s[index];
      index++;
      // 递归终点
      if (index === s.length) {
        paths.push(currPath);
        return;
      }
    }
    /**
     * 做两次不同的深度优先遍历
     */
    DFS(index + 1, currPath + s[index]);
    DFS(index + 1, currPath + swapCase(s[index]));
  };
  DFS(0, "");
  return paths;
};

letterCasePermutation("A1b2");
