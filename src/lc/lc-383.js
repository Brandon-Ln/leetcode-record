/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const magHashMap = new Map();
  // fill map
  for (let i = 0; i < magazine.length; i++) {
    magHashMap.set(magazine[i], (magHashMap.get(magazine[i]) ?? 0) + 1);
  }
  // iterate and judge
  for (let i = 0; i < ransomNote.length; i++) {
    const currCount = magHashMap.get(ransomNote[i]) ?? 0;
    if (currCount === 0) {
      return false;
    }
    magHashMap.set(ransomNote[i], currCount - 1);
  }
  return true;
};
