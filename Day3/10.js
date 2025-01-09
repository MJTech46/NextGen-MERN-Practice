var array = [1,5,2,3,10,9,8,7,6]

//collection of 3
var array3 =[]
array.forEach(element => {
    if (element%3==0) {
        array3.push(element)
    }
});
console.log(array3);

//collection of 5
var array5 =[]
array.forEach(element => {
    if (element%5==0) {
        array5.push(element)
    }
});
console.log(array5);

// new array
var newArray = array;
console.log(newArray);


// replace index of 2's multiple
for (let i = 0; i <= newArray.length; i++) {
    if (i%2==0) {
        newArray[i] = array3.pop();
    }
}

// replace index of 5's multiple
for (let i = 0; i <= newArray.length; i++) {
    if (i%5==0) {
        newArray[i] = array5.pop();
    }
}

// sum
var sum = 0;
array.forEach(element => {
    sum=sum+element
});


// replace index of 2's and 3's multiple with sum 
for (let i = 0; i <= newArray.length; i++) {
    if (i%2==0 && i%3==0) {
        newArray[i] = sum;
    }
    
}

console.log("New array : "+newArray)
