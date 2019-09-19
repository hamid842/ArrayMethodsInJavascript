var myNumbers = [12, 52, 45, 1, 78, 9];

var iterator = myNumbers.entries();
console.log('entries() : returns a new Array Iterator object that contains the key/value =====> ' +
    iterator.next().value); // index 0
console.log(iterator.next().value); // index 1
console.log(iterator.next().value); // index 2