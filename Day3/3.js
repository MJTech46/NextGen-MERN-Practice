// take any list and print even

var array = [1,2,4,10,8,54,68,3];

// array.forEach(element => {
//     if (element % 2 == 0) {
//         console.log(element);
//     }
// });

for(let i=0; i<array.length; i++){
    if (array[i] % 2 == 0) {
        console.log(array[i]);
    }
}