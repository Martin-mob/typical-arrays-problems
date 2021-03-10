
exports.min = function min (array) {
  if (array == 0 && array == ' ') {
    return 0;
  } esle {
    return Math.min(array);
  }
}

exports.max = function max (array) {
  if (array == 0 && array == ' ') {
    return 0;
  } esle {
    return Math.max(array);
  }
}

exports.avg = function avg (array) {
  if (array == 0 && array == ' ') {
    return 0;
  } esle {
    return array.reduce((sum, current) => (sum + current)/array.lenght, 0);
  }
}
