/**
 * @see {@link https://leetcode.cn/problems/bulls-and-cows/?envType=daily-question&envId=2024-03-10}
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bCount = 0;
  let cCount = 0;
  /**
   * 记录非公牛数字时的字符计数
   * @type {Map<number, number>}
   */
  const sMap = new Map();

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bCount++;
    } else {
      sMap.set(secret[i], (sMap.get(secret[i]) || 0) + 1);
    }
  }

  for (let i = 0; i < guess.length; i++) {
    /**
     * 当猜测字符命中，且当前字符不相等时进行奶牛计数
     * @example
     * ["11", "10"]
     */
    if (sMap.get(guess[i]) && guess[i] !== secret[i]) {
      cCount++;
      /**
       * 当出现一个位置不对的数据之后，
       * 扣除一位计数，防止重复计算奶牛数
       */
      sMap.set(guess[i], sMap.get(guess[i]) - 1);
    }
  }

  return `${bCount}A${cCount}B`;
};

getHint("1122", "2211");
