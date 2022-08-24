/**
 * @param {number} n
 * @return {number}
 */
const consecutiveNumbersSum = function (n) {
  let res = 0;
  const maxEnumNum = Math.sqrt(2 * n);
  for (let num = 1; num <= maxEnumNum; num++) {
    if (2 * n % num !== 0) {
      continue;
    }
    if ((2 * n / num + 1 - num) % 2 === 0) {
      res++;
    }
  }
  return res;
};
