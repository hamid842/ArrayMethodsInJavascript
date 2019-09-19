console.log('find() : returns the value of the first element after testing function =====> ' +
    myNumbers.find(function found(element) {
        return element > 10;
    }));

/* ====== find(callback(element[, index[, array]])[, thisArg]) =====
=> callback
Function to execute on each value in the array, taking 3 arguments:
=> element
The current element in the array.
=> index (Optional)
The index (position) of the current element in the array.
=> array (Optional)
The array that find was called on.
=> thisArg (Optional)
Object to use as this inside callback.*/