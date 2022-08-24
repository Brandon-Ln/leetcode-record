/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = function (text) {
  const countMap = new Map();
  const letters = ["b", "a", "l", "o", "n"];
  for (let i = 0; i < text.length; i++) {
    if (letters.includes(text[i])) {
      const currCount = countMap.get(text[i]) || 0;
      countMap.set(text[i], currCount + 1);
    }
  }
  let res = Infinity;
  // 字符集不够的场景下直接返回
  if (countMap.size < letters.length) return 0;
  for (let [key, value] of countMap.entries()) {
    if (["l", "o"].includes(key)) {
      value = Math.floor(value / 2);
    }
    res = Math.min(value, res);
  }
  return res === Infinity ? 0 : res;
};

maxNumberOfBalloons("nlaebolko");
