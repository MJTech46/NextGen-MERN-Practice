// arrays operations

var array1 = [1,2,3,4];
var array2 = [5,6,7,8];

console.log("\nArray 1 : ", array1);
console.log("Array 2 : ", array2, "\n");

array1.push(5);
array2.pop();

console.log("\nArray 1 after pushing 5 : ", array1);
console.log("Array 2 after poping : ", array2, "\n");


array1.shift();
array2.unshift(10);

console.log("\nArray 1 after shift() : ", array1);
console.log("Array 2 after unshift() : ", array2, "\n");


let sliceArray = array2.slice(0,2);
let indexOfValue = array2.indexOf(7);
console.log("slice of array", sliceArray);
console.log("Index of 7 is ", indexOfValue);

let newArray = array1.concat(array2);
console.log("new concated  is ", newArray);

