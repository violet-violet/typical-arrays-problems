
exports.min = function min (array) {
  if ( (array === undefined) || (array == 0)) {
    return 0;
  } else {
    let rez = array.sort(function(a, b) {
        return a - b;
      });
    return rez[0];
  }
}

exports.max = function max (array) {
  if ( (array === undefined) || (array == 0)) {
    return 0;
  } else {
    let rez = array.sort(function(a, b) {
        return a - b;
      });
    return rez[rez.length - 1];
  }
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
