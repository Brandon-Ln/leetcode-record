/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = function(m, n, ops) {
    let minRow = m
    let minCol = n
    for(const operation of ops){
        minRow = Math.min(minRow, operation[0])
        minCol = Math.min(minCol, operation[1])
    }
    return minRow * minCol
};