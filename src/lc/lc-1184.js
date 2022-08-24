/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
const distanceBetweenBusStops = function (distance, start, destination) {
  const sum = distance.reduce((preSum, curr) => preSum + curr);
  if (start > destination) {
    const temp = start;
    start = destination;
    destination = temp;
  }
  let clockwiseSum = 0;
  for (let i = start; i < destination; i++) {
    clockwiseSum += distance[i];
  }
  return Math.min(clockwiseSum, sum - clockwiseSum);
};
