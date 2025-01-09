var limit = 100;

//perfect cube
for (let i = 0; i <= limit ; i++) {
    /////
    let j =0;
    while (j*j*j<i) {
        j++;
    }
    if (j*j*j == i) {
        console.log(i+" is a perfect cube!");
    }
    //////
    
}