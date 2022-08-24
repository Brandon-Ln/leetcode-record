/**
 * @param {string} queryIP
 * @return {string}
 */
const validIPAddress = function (queryIP) {
  // 匹配 x、xx、1xx、2xx-249、250-255 || (.(x、xx、1xx、2xx-249、250-255) * 3)
  const isIpv4Re = /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}$/;

  const isIpv6Re = /^([a-fA-F0-9]{1,4})(\:([a-fA-F0-9]{1,4})){7}$/

  return isIpv4Re.test(queryIP) ? "IPv4" : isIpv6Re.test(queryIP)? "IPv6" : "Neither";
};
