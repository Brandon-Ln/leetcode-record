/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
const dayOfTheWeek = function (day, month, year) {
  const dateDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const normalMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let totalDays = 4; // 按照题目要求，从 1970 起算，1970 的最后一天是周四
  // 求和之前总天数
  for (let i = 1971; i < year; i++) {
    // 判断是否是闰年
    const isLeap = (i % 4 === 0 && i % 100 !== 0) || i % 400 === 0;
    if (isLeap) {
      totalDays += 366;
    } else {
      totalDays += 365;
    }
  }
  const thisYearLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  // 求和当年的总天数
  for (let i = 1; i < month; i++) {
    if (i === 2 && thisYearLeap) {
      totalDays++;
    }
    totalDays += normalMonthDays[i - 1];
  }
  // 求和当月的总天数
  totalDays += day;
  // 返回结果
  return dateDays[totalDays % 7];
};
