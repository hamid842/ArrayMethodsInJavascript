var myNumbers = [25, 75, 1, 9, 32, 54, 1];
var myLetters = ['a', 'b', 'c', 'd'];
console.log('concat() : is used to merge two or more arrays =====> ' + myNumbers.concat(myLetters));
// concat() => This method does not change the existing arrays, but instead returns a new array.

/* ==== concat([value1[, value2[, ...[, valueN]]]]) =====
=> valueN Optional
Arrays and/or values to concatenate into a new array. 
If all valueN parameters are omitted, concat returns a shallow copy of 
the existing array on which it is called. See the description below for more details.*/