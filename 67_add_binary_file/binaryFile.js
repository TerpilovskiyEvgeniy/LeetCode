var addBinary = function(a, b) {
    a = `0b${a}`;
    b = `0b${b}`;
    let res = BigInt(a) + BigInt(b);
    return res.toString(2)
}
console.log(addBinary(11,1));