/**
 * @param {number[]} persons
 * @param {number[]} times
 */
const TopVotedCandidate = function (persons, times) {
  this.persons = persons;
  this.times = times;
  this.memo = new Map(); // 计算缓存
};

TopVotedCandidate.prototype.binarySearch = function (time) {
  let left = 0;
  let right = this.times.length - 1;
  while (left < right) {
    const mid = Math.ceil((left + right) / 2);
    if (this.times[mid] === time) {
      return mid;
    } else if (this.times[mid] > time) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
};

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
  const nearestIndex = this.binarySearch(t);
  if (this.memo.has(nearestIndex)) {
    return this.memo.get(nearestIndex);
  }
  let maxCount = 0
  let personId = 0
  // 找众数的过程
  const countMap = new Map();
  for (let i = 0; i <= nearestIndex; i++) {
    const currentCount = countMap.get(this.persons[i]) || 0;
    if(currentCount >= maxCount){
        maxCount = currentCount;
        personId = this.persons[i]
    }
    countMap.set(this.persons[i], currentCount + 1);
  }
  this.memo.set(nearestIndex, personId);
  return personId;
};

const demo = new TopVotedCandidate(
  [0, 1, 1, 0, 0, 1, 0],
  [0, 5, 10, 15, 20, 25, 30]
);

demo.q(15);
