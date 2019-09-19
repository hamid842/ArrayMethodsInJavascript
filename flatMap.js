var myNumbers = [1, 2, 3, 4, 5];
var a = myNumbers.map(x => [x * 2]);
var b = a.flatmap(x => [x * 2]);
console.log(a);
console.log(b);