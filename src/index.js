
exports.min = function min (...array) {
    if (array[0] === undefined || array[0].length === 0) {
        return 0;
    }
    const res = Math.min(...array[0]);
    return res;
}

exports.max = function max (...array) {
    if (array[0] === undefined || array[0].length === 0) {
        return 0;
    }
    return Math.max(...array[0]);
}

exports.avg = function avg (...array) {
    if (array[0] === undefined || array[0].length === 0) {
        return 0;
    }

  const sum = array[0].reduce((a, b) => a + b, 0);
  const avg = (sum / array[0].length) || 0;
  return avg;
}
