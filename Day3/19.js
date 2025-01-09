// concat vowels and no vowels

const string1 = "desktop";
const string2 = "student";

const vowels = ["a","e","i","o","u"]
var finalString = "";

// collect vowels
for (const i of string1) {
    vowels.forEach(element => {
        if (i == element) {
            finalString = finalString + i;
        }
    });
}

// collect non vowels
for (const i of string2) {
    let flag = 0;
    vowels.forEach(element => {
        if (i == element) {
            flag++;
        } 
    });
    if (flag == 0){
        finalString = finalString + i;
    }
}

console.log("Final string:", finalString);
