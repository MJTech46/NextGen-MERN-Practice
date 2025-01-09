// reverse a  string

const keyStr = "hello";

var revKeyStr ="";
for (let i = keyStr.length-1; i >= 0; i--) {
    revKeyStr=revKeyStr+keyStr[i]
}
console.log(revKeyStr);