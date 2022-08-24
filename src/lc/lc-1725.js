/**
 * @param {number[][]} rectangles
 * @return {number}
 */
const countGoodRectangles = function (rectangles) {
  let minLen = -Infinity;
  let count = 1;
  for (let i = 0; i < rectangles.length; i++) {
    const currMinLen = Math.min(...rectangles[i]);
    if (currMinLen > minLen) {
      minLen = currMinLen;
      count = 1;
    } else if (currMinLen === minLen) {
      count++;
    }
  }
  return count;
};

countGoodRectangles([
  [5, 8],
  [3, 9],
  [5, 12],
  [16, 5],
]);
