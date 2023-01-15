

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix.length == 0) {
    return [];
  }
  else {
    let arr = [];
      for (let i = 1; i < matrix.length; i += 2) {
        matrix[i] = matrix[i].reverse();
      }
    return arr = [].concat(...matrix);
  }
}
