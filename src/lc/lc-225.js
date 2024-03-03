/**
 * @see {@link https://leetcode.cn/problems/implement-stack-using-queues/description/?envType=daily-question&envId=2024-03-03}
 */
var MyStack = function () {
  /**
   * @type {number[]}
   */
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
  for (let i = 1; i < this.queue.length; i++) {
    this.queue.push(this.queue.shift());
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue[this.queue.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
