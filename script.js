function min (array) {
    if ( (array === undefined) || (array == 0)) {
        return 0;
      } else {
        let rez = array.sort(function(a, b) {
            return a - b;
          });
        return rez[0];
      }
  }

console.log(min([27,-18,-39,-39,-9,16,-35,6,-6,-21,17,13,37,-30,27,11,-15,37,-38,-39]), 'а должно быть -39');