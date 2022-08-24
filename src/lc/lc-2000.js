/**
 * @param {string} word
 * @param {string} ch
 * @return {string}
 */
const reversePrefix = function (word, ch) {
  const wordList = word.split("");
  let left = 0;
  let right = 0;
  // 右移指针
  while (right < wordList.length && wordList[right] !== ch) {
    right++;
  }
  // 如果不存在字符，则直接返沪
  if (right === word.length) return word;
  // 翻转字符
  while (left < right) {
    let temp = wordList[left];
    wordList[left] = wordList[right];
    wordList[right] = temp;
    left++;
    right--;
  }
  return wordList.join("");
};

reversePrefix("abcdefd", "d");
