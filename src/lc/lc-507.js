/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = function (num) {
  // 边缘场景
  if (num === 1) return false;
  const maxTimes = Math.floor(Math.sqrt(num));
  let sum = 0;
  for (let i = 1; i <= maxTimes; i++) {
    if (num % i === 0) {
      sum += i;
      const anotherTimes = num / i;
      if (anotherTimes !== num) sum += anotherTimes;
    }
  }
  return sum === num;
};

checkPerfectNumber(6);
