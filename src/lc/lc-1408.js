/**
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = function (words) {
  const res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (j !== i && words[j].includes(words[i])) {
        res.push(words[i]);
        break;
      }
    }
  }
  return res;
};
