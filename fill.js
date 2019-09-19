var myNumbers = [10, 5, 4, 78, 96, 1];
console.log('fill() :fills (modifies) all the elements from a start index to an end index  =====> ' +
    myNumbers.fill(0, 2, 4));
console.log(myNumbers.fill(12));
/* ===== fill(value[, start[, end]]) =====
=> value
Value to fill an array.
=> start (Optional)
Start index, defaults to 0.
=> end (Optional)
End index, defaults to this.length.*/