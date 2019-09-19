var myNumbers = [
    [1, 2],
    [3, 4],
    [5, 6]
].reduceRight(
    (acc, i) => acc.concat(i)
);
console.log(myNumbers);

/*
======== The reduceRight() method applies a function against an accumulator and each =======
value of the array (from right-to-left) to reduce it to a single value.

=== arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue]) ====

=> callback
Function to execute on each value in the array, taking four arguments:
=> accumulator
The value previously returned in the last invocation of the callback, or initialValue, if supplied. (See below.)
=> currentValue
The current element being processed in the array.
=> index(Optional)
The index of the current element being processed in the array.
=> array(Optional)
The array reduceRight() was called upon.
initialValue(Optional)
    */