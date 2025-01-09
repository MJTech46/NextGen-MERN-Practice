// 2, 22, 222, 2222

const limit = 10;
const char = "2";

var strArray = [];
for (let i = 1; i <= limit; i++) {
    let string = "";
    for (let j = 0; j < i; j++) {
        string = string + char;
    }
    strArray.push(string);
}

console.log(strArray.join(","))
