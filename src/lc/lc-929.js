/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function (emails) {
  const hashSet = new Set();
  for (let i = 0; i < emails.length; i++) {
    const [userString, domainString] = emails[i].split("@", 2);
    const formatUserString = userString.split("+", 1)[0].split(".").join("");
    hashSet.add(formatUserString + "@" + domainString);
  }
  return hashSet.size;
};