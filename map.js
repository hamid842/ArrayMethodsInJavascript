var myNumbers = [1, 2, 3, 4, 5];
var map1 = myNumbers.map(x => x * 2);
console.log(map1);

/*
The map() method creates a new array with the results of calling
 a provided function on every element in the calling array.

  ==== var new_array = arr.map(function callback(currentValue[, index[, array]]) { ======
    // Return element for new_array
}[, thisArg])

=> callback
Function that produces an element of the new Array, taking three arguments:
=> currentValue
The current element being processed in the array.
=> index(Optional)
The index of the current element being processed in the array.
=> array(Optional)
The array map was called upon.
=> thisArg(Optional)
*/