/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  const stack = [];
  let lessCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(1);
    } else if (stack.length > 0) {
      stack.pop();
    } else {
      lessCount++;
    }
  }
  return stack.length + lessCount;
};

minAddToMakeValid("())")