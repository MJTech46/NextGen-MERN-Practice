// palindrome

var key = "malayalam"

//find reverse
var revKey ="";
for (let i = key.length-1; i >= 0; i--) {
    revKey=revKey+key[i]
}

// check each other
if (key === revKey) {
    console.log(key+" is palindrome.");
} else {
    console.log(key+" is not palindrome.");
}