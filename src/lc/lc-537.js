/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const complexNumberMultiply = function (num1, num2) {
  const splitNum1 = num1.split("+");
  const splitNum2 = num2.split("+");
  const a2 = Number(splitNum1[0]) * Number(splitNum2[0]);
  const ab =
    parseInt(splitNum1[1]) * parseInt(splitNum2[0]) +
    parseInt(splitNum1[0]) * parseInt(splitNum2[1]);
  const b2 = -1 * parseInt(splitNum1[1]) * parseInt(splitNum2[1]);
  console.log(a2, ab, b2);
  return `${a2 + b2}+${ab}i`;
};

complexNumberMultiply("1+1i", "1+1i");
