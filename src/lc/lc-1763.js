/**
 * @param {string} s
 * @return {string}
 */
const longestNiceSubstring = function (s) {
  // 递归终点 1
  if (s.length < 2) {
    return "";
  }
  // 分治解法
  for (let i = 0; i < s.length; i++) {
    // 判断完整的字符串中是否存在无大小写对等的字符
    // 如果存在，那幸福串必然存在于该字符的两段，即可进行分支穷举所有情况
    if (!s.includes(s[i].toLowerCase()) || !s.includes(s[i].toUpperCase())) {
      // 该字符必不存在于最终答案
      const subLeftString = s.slice(0, i);
      const subRightString = s.slice(i + 1, s.length);
      const subLeftNiceStr = longestNiceSubstring(subLeftString);
      const subRightNiceStr = longestNiceSubstring(subRightString);
      return subLeftNiceStr.length >= subRightNiceStr.length
        ? subLeftNiceStr
        : subRightNiceStr;
    }
  }
  // 递归终点 2，整个字符串都是幸福串
  return s;
};

longestNiceSubstring("YazaAay")
