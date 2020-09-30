
exports.min = function min (array) {
  return 0;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  if ( (array === undefined) || (array == 0)) {
    return 0;
  } else {
      let sum = 0;
      array.forEach(element => {
        sum += element;
      });
      return sum / array.length;
    } 
}
