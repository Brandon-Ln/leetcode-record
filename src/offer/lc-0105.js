/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
const oneEditAway = function (first, second) {
  // 直接判准情况，两者长度差距太大的情况
  const diffLen = Math.abs(first.length - second.length);
  if (diffLen > 1) {
    return false;
  }
  let restDiff = 1;
  // 之后只存在 x 和 x + 1
  // 用双指针求解
  let firstPointer = 0;
  let secondPointer = 0;
  while (firstPointer < first.length && secondPointer < second.length) {
    if (first[firstPointer] !== second[secondPointer]) {
      // 这里判断两种场景：当字符串长度不同时执行插入、删除，相同时执行替换
      if (first.length > second.length) {
        secondPointer--;
      } else if (first.length < second.length) {
        firstPointer--;
      }
      restDiff--;
    }
    if (restDiff < 0) {
      return false;
    }
    firstPointer++;
    secondPointer++;
  }
  // 还剩尾部插入的边缘场景
  return true;
};

oneEditAway("teacher", "bleacher");
