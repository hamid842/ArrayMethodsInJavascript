var array1 = [1, 2, [3, 4]];
const newArray = array1.flat();
console.log('flar() :  creates a new array with all sub-array elements ' +
    'concatenated into it recursively up to the specified depth.' +
    newArray);

/* ====== flat([depth]) ========
=> depth Optional
The depth level specifying how deep a nested array
 structure should be flattened. Defaults to 1.*/