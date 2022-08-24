/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
const uncommonFromSentences = function (s1, s2) {
  const words = [...s1.split(" "), ...s2.split(" ")];
  const hashMap = new Map();
  const res = [];
  for (let i = 0; i < words.length; i++) {
    const currCount = hashMap.get(words[i]) || 0;
    hashMap.set(words[i], currCount + 1);
  }
  for (const [key, count] of hashMap.entries()){
    if (count === 1) {
      res.push(key);
    }
  }
  return res;
};

uncommonFromSentences("this apple is sweet", "this apple is sour");
