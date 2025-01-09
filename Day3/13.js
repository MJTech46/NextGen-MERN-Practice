// upper to lower case

keyValuePair = {
    a:"A",
    b:"B",
    c:"C",
    d:"D",
    e:"E",
    f:"F",
    g:"G",
    h:"H",
    i:"I",
    j:"J",
    k:"K",
    l:"L",
    m:"M",
    n:"N",
    o:"O",
    p:"P",
    q:"Q",
    r:"R",
    s:"S",
    t:"T",
    u:"U",
    v:"V",
    w:"W",
    x:"X",
    y:"Y",
    z:"Z",
}

var keyStr="hello";

var newStr="";
for (let i = 0; i < keyStr.length; i++) {
    newStr = newStr + keyValuePair[keyStr[i]];
}
console.log(newStr)