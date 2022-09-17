/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const posMap = new Map();
  for (let i = 0; i < s.length; i++) {
    // 判断是否出现过当前字符
    if (!posMap.has(s[i])) {
      posMap.set(s[i], [i, i]);
    } else {
      const [firstPos, lastPos] = posMap.get(s[i]);
      if (i > lastPos) {
        posMap.set(s[i], [firstPos, i]);
      }
    }
  }
  let res = -Infinity;
  for (const [, posTuple] of posMap.entries()) {
    res = Math.max(posTuple[1] - posTuple[0] - 1, res);
  }
  return res;
};

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const firstPosList = new Array(26).fill(-1);
  let res = -1;
  const firstCode = "a".charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt(0) - firstCode;
    if (firstPosList[index] !== -1) {
      res = Math.max(i - firstPosList[index] - 1, res);
    } else {
      firstPosList[index] = i;
    }
  }
  return res;
};

maxLengthBetweenEqualCharacters("cabbac");
