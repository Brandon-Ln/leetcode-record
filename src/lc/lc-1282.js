/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const res = [];
  const hashMap = new Map();
  for (let i = 0; i < groupSizes.length; i++) {
    if (!hashMap.has(groupSizes[i])) {
      hashMap.set(groupSizes[i], []);
    }
    const currGroup = hashMap.get(groupSizes[i]);
    currGroup.push(i);
  }
  for (const [groupLimit, currGroup] of hashMap.entries()) {
    res.push([]);
    for (let i = 0; i < currGroup.length; i++) {
      if (res[res.length - 1].length >= groupLimit) {
        res.push([]);
      }
      res[res.length - 1].push(currGroup[i]);
    }
  }
  return res;
};

groupThePeople([2, 1, 3, 3, 3, 2]);
