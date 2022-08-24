/**
 * @param {number} n
 * @return {number}
 */
const nextGreaterElement = function (n) {
  const max = 2147483647;
  /**
   * 如果数字的每一位都是变小的，那必然不存在更大的数了
   * 本质上是把右边的一个大数和左边的一个小数做交换
   */
  const numStrArr = n.toString().split("");
  /**
   * 优先确定小数，因为影响位数
   * 左边的小数需要尽量的靠右，这样影响的位数就小，
   * 小数的右边必然是一个递增区间,
   * 如果是边缘场景，如：1234，那初始化zhi
   */
  let leftLessIndex = 0;
  for (let i = numStrArr.length - 2; i >= 0; i--) {
    if (numStrArr[i] < numStrArr[i + 1]) {
      leftLessIndex = i;
      break;
    }
  }
  /**
   * 递减区间
   * 右边的大数需要比小数大，但是要尽可能偏左
   */
  let rightLargeIndex = numStrArr.length - 1;
  for (let i = leftLessIndex + 1; i < numStrArr.length; i++) {
    if (numStrArr[i] > numStrArr[leftLessIndex]) {
      rightLargeIndex = i;
    }
  }
  // 进行交换
  swap(numStrArr, leftLessIndex, rightLargeIndex);
  /**
   *  翻转完之后，高位右侧必然为递减区间，需要进行双指针翻转来保证升序最小
   */
  let left = leftLessIndex + 1;
  let right = numStrArr.length - 1;
  while (left < right) {
    swap(numStrArr, left, right);
    left++;
    right--;
  }
  const mayRes = Number(numStrArr.join(""));
  return mayRes > n && mayRes <= max ? mayRes : -1;
};

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

nextGreaterElement(2147483476);
