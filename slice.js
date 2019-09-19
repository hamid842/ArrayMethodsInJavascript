var myNames = ['hamid', 'sara', 'mehdi', 'saeed', 'tarlan', 'zahra'];
console.log(myNames.slice(2, 3));
console.log(myNames.slice(2, 5));
console.log(myNames.slice(2, -2));

/*
arr.slice([begin[, end]])

=> begin(Optional)
Zero-based index at which to begin extraction.
A negative index can be used, indicating an offset from the end of the sequence. 
slice(-2) extracts the last two elements in the sequence.
If begin is undefined, slice begins from index 0.
If begin is greater than the length of the sequence, an empty array is returned.
=> end(Optional)
Zero-based index before which to end extraction. slice extracts up to but not including end.
For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
A negative index can be used, indicating an offset from the end of the sequence.
slice(2,-1) extracts the third element through the second-to-last element in the sequence.
If end is omitted, slice extracts through the end of the sequence (arr.length).
If end is greater than the length of the sequence, slice extracts through 
to the end of the sequence (arr.length).
*/