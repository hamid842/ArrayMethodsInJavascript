var persons = ['hamid', 'mehdi', 'tarlan', 'sara'];

console.log(persons.lastIndexOf('hamid'));
console.log(persons.lastIndexOf('tarlan'));
/*
===== lastIndexOf(searchElement[, fromIndex]) ======
searchElement
Element to locate in the array.
fromIndex Optional
The index at which to start searching backwards. 
Defaults to the array's length minus one (arr.length - 1), i.e.
the whole array will be searched. If the index is greater than or
equal to the length of the array, the whole array will be searched. 
If negative, it is taken as the offset from the end of the array. 
Note that even when the index is negative, the array is still
searched from back to front. If the calculated index is less than 0, -1 is returned,
i.e. the array will not be searched.
*/