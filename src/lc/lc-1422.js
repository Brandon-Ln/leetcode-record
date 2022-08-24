/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  const firstNotZero = s.indexOf("1");
  const realFirstNotZero =
    firstNotZero === 0 ? 1 : firstNotZero === -1 ? s.length - 1 : firstNotZero;
  let sum = 0;
  for (let i = 0; i < realFirstNotZero; i++) {
    if (s[i] === "0") {
      sum++;
    }
  }
  for (let j = realFirstNotZero; j < s.length; j++) {
    if (s[j] === "1") {
      sum++;
    }
  }
  return sum;
};

maxScore("00");
