/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function (s, words) {
  const wordLen = words[0].length;
  let left = 0;
  let right = wordLen * words.length;
  const res = [];
  const wordsMap = new Map();
  // initialize wordsMap
  for (let i = 0; i < words.length; i++) {
    wordsMap.set(words[i], (wordsMap.get(words[i]) || 0) + 1);
  }
  // iterate string
  while (right <= s.length) {
    const currentMap = new Map();
    const currentStringArr = s.slice(left, right).replace(new RegExp(`(.{${wordLen}})`, "g"), "$1,").split(",")
    let isEqual = true
    for(let i = 0; i < currentStringArr.length - 1; i++){
        currentMap.set(currentStringArr[i], (currentMap.get(currentStringArr[i]) || 0) + 1)
    }
    for(const key of currentMap.keys()){
        if(currentMap.get(key) !== wordsMap.get(key)){
            isEqual = false
        }
    }
    isEqual && res.push(left)
    left++;
    right++;
  }
  return res;
};

findSubstring("barfoothefoobarman", ["foo", "bar"]);
