var myNumbers = [12, 52, 84, 69, 35, 42];
var even = function(element) {
    return element % 2 === 0;
}
console.log(myNumbers.some(even));
/*
The some() method tests whether at least one element in the array passes the test implemented 
by the provided function. It returns a Boolean value. 

arr.some(callback(element[, index[, array]])[, thisArg])

=> callback
A function to test for each element, taking three arguments:
=> element
The current element being processed in the array.
=> index (Optional)
The index of the current element being processed in the array.
=> array(Optional)
The array some() was called upon.
=> thisArg(Optional)
A value to use as this when executing callback.
*/