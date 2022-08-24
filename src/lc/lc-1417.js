/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const numbersInString = [];
  const lettersInString = [];
  for (let i = 0; i < s.length; i++) {
    numbers.includes(s[i])
      ? numbersInString.push(s[i])
      : lettersInString.push(s[i]);
  }
  if (s.length % 2 === 0) {
    return numbersInString.length === s.length / 2
      ? numbersInString.reduce((pre, currNum, index) => {
          return pre + currNum + lettersInString[index];
        }, "")
      : "";
  } else {
    return numbersInString.length === Math.floor(s.length / 2) + 1
      ? lettersInString.reduce((pre, currLetter, index) => {
          return pre + currLetter + numbersInString[index + 1];
        }, numbersInString[0])
      : numbersInString.length === Math.floor(s.length / 2)
      ? numbersInString.reduce((pre, currNumber, index) => {
          return pre + currNumber + lettersInString[index + 1];
        }, lettersInString[0])
      : "";
  }
};

reformat("covid2019");
