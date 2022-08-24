/**
 * @param {string} s
 * @return {string}
 */
 const longestDupSubstring = function(s) {
    let res = '';
    for (let i = 0; i < s.length; i++) {
        while (s.slice(i + 1, s.length).includes(s.slice(i, i + res.length + 1))) {
            res = s.slice(i, i + res.length + 1);
        }
    }
    return res;
};

longestDupSubstring("zxcvdqkfawuytt")