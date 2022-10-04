/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const countMap = new Map();
  for (let i = 0; i < cpdomains.length; i++) {
    const [count, domains] = cpdomains[i].split(" ");
    const domainList = domains.split(".");
    for (let i = 0; i < domainList.length; i++) {
      const currDomain = domainList.filter((_, index) => index >= i).join(".");
      if (!countMap.get(currDomain)) {
        countMap.set(currDomain, 0);
      }
      const currDomainCount = countMap.get(currDomain);
      countMap.set(currDomain, currDomainCount + Number(count));
    }
  }
  return Array.from(countMap.entries()).map(
    ([key, count]) => `${count} ${key}`
  );
};

subdomainVisits([
  "900 google.mail.com",
  "50 yahoo.com",
  "1 intel.mail.com",
  "5 wiki.org",
]);
