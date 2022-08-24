/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = function (words, pattern) {
  function wordMatchPattern(word, pattern) {
    const hashMap = new Map();
    for (let i = 0; i < word.length; i++) {
      /**
       * 如果哈希表中已经记录过该字符，但是不匹配那么直接返回 false
       */
      if (hashMap.has(word[i]) && hashMap.get(word[i]) !== pattern[i]) {
        return false;
        /**
         * 如果哈希表中没有记录过该字符
         * 那么判断模式中是不是也是新字符，如果不是新字符证明模式不匹配
         */
      } else if (!hashMap.has(word[i]) && hashSet.has(pattern[i])) {
        return false;
      } else {
        /**
         * 否则同时是新字符，
         * 写哈希表
         */
        hashMap.set(word[i], pattern[i]);
      }
    }
    return true;
  }

  return words.filter((word) => {
    return wordMatchPattern(word, pattern);
  });
};
