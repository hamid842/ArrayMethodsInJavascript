var myNumbers = [12, 41, 2, 5, 1, 6];
console.log('copyWithin() : copies part of an array to another location =====> ' +
    myNumbers.copyWithin(0, 4));

/* copyWithin(target , start[optional] , end[opthional])

==> target
Zero-based index at which to copy the sequence to.
If negative, target will be counted from the end.
If target is at or greater than arr.length, nothing will be copied. 
If target is positioned after start, the copied sequence will be trimmed to fit arr.length.

==> start Optional
Zero-based index at which to start copying elements from. If negative, start will be counted from the end.
If start is omitted, copyWithin will copy from index 0.
 
==> end Optional */