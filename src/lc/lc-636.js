/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const stack = [];
  const times = new Array(n).fill(0);
  let currTimeStamp = 0;
  for (let i = 0; i < logs.length; i++) {
    const [id, status, timestamp] = logs[i].split(":");
    if (status === "start") {
      /**
       * 如果说函数 stack 里面有内容，说明产生了嵌套调用，此时统计有效时间
       */
      if (stack.length) {
        const [lastId] = stack[stack.length - 1];
        times[lastId] += Number(timestamp) - Number(currTimeStamp);
      }
      /**
       * 更新当前时间，函数栈
       */
      currTimeStamp = Number(timestamp);
      stack.push([id, timestamp]);
    } else {
      stack.pop();
      times[id] += Number(timestamp) - Number(currTimeStamp) + 1;
      currTimeStamp = Number(timestamp) + 1; // 当前时间已经执行完了
    }
  }
  return times;
};

exclusiveTime(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]);
