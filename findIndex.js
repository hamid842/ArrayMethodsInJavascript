var myLetters = ['hamid', 'mohamadi', 'mehsi', 'sara'];

function wordStartWith(element) {
    return element.length < 5;
}
console.log('findIndex() : returns the index, of the first element after testing function.' +
    myLetters.findIndex(wordStartWith));

/* ======= findIndex(callback(element[, index[, array]])[, thisArg]) =========

=> callback
A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found. It takes three arguments:
=> element
The current element being processed in the array.
=> index(Optional)
The index of the current element being processed in the array.
=> array(Optional)
The array findIndex was called upon.
=> thisArg(Optional)
Optional object to use as this when executing callback.*/