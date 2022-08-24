/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function (word) {
  // 边界情况
  if (word.length === 1) {
    return true;
  }
  const isFirstLetterUpper = word[0].toUpperCase() === word[0];
  const isAllLetterUpper =
    word[1].toUpperCase() === word[1] && isFirstLetterUpper;
  for (let i = 1; i < word.length; i++) {
    if (isAllLetterUpper && word[i].toUpperCase() !== word[i]) {
      return false;
    } else if (!isAllLetterUpper && word[i].toUpperCase() === word[i]) {
      return false;
    }
  }
  return true;
};
