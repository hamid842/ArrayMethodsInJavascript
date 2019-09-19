/*
forEach() : executes a provided function once for each array element
*/

var myNumbers = [1, 2, 3, 4];
myNumbers.forEach(function print(element) {
    console.log(element);
});

/*
====== forEach(callback(currentValue [, index [, array]])[, thisArg]) =====
=> callback
Function to execute on each element, taking three arguments:
=> currentValue
The current element being processed in the array.
=> index (Optional)
The index of the current element being processed in the array.
=> array (Optional)
The array forEach() was called upon.
=> thisArg (Optional)
*/