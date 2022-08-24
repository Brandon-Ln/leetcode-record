// 给定一个仅包含数字 0-9 的字符串 num 和一个目标值整数 target ，
// 在 num 的数字之间添加 二元 运算符（不是一元）+、- 或 * ，返回所有能够得到目标值的表达式。

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
  const operators = ["", "+", "-", "*"];
  let numIndex = 0;
  const possibilities = [num[numIndex]];
  let currQueueLen = possibilities.length;
  const res = []; // 结果数组
  let preNum = 0;
  // 使用广度优先遍历求所有拼接可能性
  while (numIndex + 1 < num.length) {
    for (let i = 0; i < currQueueLen; i++) {
      const currNum = Number(possibilities.shift());
      for (let j = 0; j < operators.length; j++) {
        // 如果前一个数字是 0 则不能插空
        if (operators[j] === "" && currPath) {
          continue;
        }
        const currPath = calculate(
          currNum,
          Number(num[numIndex + 1]),
          operators[j],
          preNum
        );
        preNum = Number(num[numIndex]);
        // 如果 bfs 到了最后层
        if (numIndex + 2 === num.length && currPath === target) {
          res.push(currPath);
          continue;
        }
        possibilities.push(currPath);
      }
    }
    numIndex++;
    currQueueLen = possibilities.length;
  }
  return res;
};

function calculate(num1, num2, operator, prevNum) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return (num1 - prevNum) * num2 + prevNum;
    case "":
      return num1 * 10 + num2;
  }
}

console.log(addOperators("123", 6));
