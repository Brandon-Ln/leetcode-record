/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  let startZeroIndex = 0;
  while (startZeroIndex < s.length && s[startZeroIndex] === "1") {
    startZeroIndex++;
  }
  for (let i = startZeroIndex; i < s.length; i++) {
    if (s[i] === "1") {
      return false;
    }
  }
  return true;
};
