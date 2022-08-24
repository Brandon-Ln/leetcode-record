/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
function Solution(radius, x_center, y_center) {
  this.x_center = x_center;
  this.y_center = y_center;
  this.radius = radius;
}
/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {
  const randomR = Math.sqrt(Math.random() * this.radius * this.radius);
  const randomAngle = Math.random() * Math.PI * 2;
  const randomX = this.x_center + randomR * Math.cos(randomAngle);
  const randomY = this.y_center + randomR * Math.sin(randomAngle);
  return [randomX, randomY];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
