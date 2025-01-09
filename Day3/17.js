// armstrong
var key = 15;

var strKey = key.toString();
var sum = 0;
for (let i=0; i<strKey.length; i++){
    sum = sum + Number(strKey[i])**3;
}
if (key === sum) {
    console.log(key, " is armstrong number.");
} else {
    console.log(key, " is not armstrong number.");
}