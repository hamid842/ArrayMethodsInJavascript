var myNumbers = [12, 45, 14, 2, 1, 3, 5];
console.log('form() : creates a new, shallow-copied Array =====> ' + Array.from(myNumbers, x => x + 1));
/* ==== from(arrayLike[, mapFn[, thisArg]]) ======
=> arrayLike
An array-like or iterable object to convert to an array.
=> mapFn (Optional)
Map function to call on every element of the array.
=> thisArg (Optional)
Value to use as this when executing mapFn.*/