console.log('of() : creates a new Array instance from a variable =====> ' + Array.of(1, 2));
console.log(Array('hamid', 'mehdi'))
console.log(Array.of('hamid', 'mehdi'))
    /*The difference between Array.of() and the Array constructor is in the handling of integer arguments:
     Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with
      a length property of 7 (Note: this implies an array of 7 empty slots,
         not slots with actual undefined values).*/
console.log(Array.of(7));
console.log(Array(7));

/* ==== of(element0[, element1[, ...[, elementN]]]) =====
=> elementN
Elements of which to create the array.*/