var myNumbers = [12, 4, 8, 56, 7, 9];
console.log('every() :tests whether all elements in the array pass the test =====> ' +
    myNumbers.every(x => x > 10)); // return boolean true or false
/*  ======= every(callback(element[, index[, array]])[, thisArg]) =======
=> callback
A function to test for each element, taking three arguments:
=> element
The current element being processed in the array.
=> index(Optional)
The index of the current element being processed in the array.
=> array(Optional)
The array every was called upon.
=> thisArg(Optional)
A value to use as this when executing callback.*/