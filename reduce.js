var myNumbers = [1, 2, 3, 4, 5];
var reducer = (acc, i) => acc + i;
console.log(myNumbers.reduce(reducer));
console.log(myNumbers.reduce(reducer, 5));

/*
======= The reduce() method executes a reducer function (that you provide) on each =======
 element of the array, resulting in a single output value.

arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

=> callback
A function to execute on each element in the array (except for the first, if no initialValue is supplied), 
taking four arguments:
=> accumulator
The accumulator accumulates the callback's return values. It is the accumulated value
previously returned in the last invocation of the callback, or initialValue, if supplied (see below).
=> currentValue
The current element being processed in the array.
=> index(Optional)
The index of the current element being processed in the array. Starts from index 0 if an 
initialValue is provided. Otherwise, starts from index 1.
=> array (Optional)
The array reduce() was called upon.
=> initialValue(Optional)
A value to use as the first argument to the first call of the callback. If no 
initialValue is supplied, the first element in the array will be used and skipped. 
Calling reduce() on an empty array without an initialValue will throw a TypeError.
 */