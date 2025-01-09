// fibonacci series

const limit = 100;

// initialization
var num1 = 0;
var num2 = 1;

console.log(num1);
for (let i = 0; i <= limit; i++) {
    console.log(num2);
    let temp = num1 + num2;
    num1 = num2;
    num2 = temp;
}