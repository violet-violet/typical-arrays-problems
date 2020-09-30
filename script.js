function avg (array) {
    console.log(array);
    if (array == 0) {
        return 0;
    }
    // if (array === underfined ) return 0;
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum / array.length;
}



console.log(avg([]), 'а должно быть 7.1');