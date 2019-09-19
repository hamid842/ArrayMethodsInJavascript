var words = ['Hamid', 'Mohammadi', 'saeed']
console.log('filter() :creates a new array with all elements that pass the test =====> ' +
    words.filter(word => word.length > 5));
/* ====== filter(callback(element[, index[, array]])[, thisArg]) =======
=> callback
Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise. It accepts three arguments:
=> element
The current element being processed in the array.
=> index(Optional)
The index of the current element being processed in the array.
=> array(Optional)
The array filter was called upon.*/