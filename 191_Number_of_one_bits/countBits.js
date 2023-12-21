var hammingWeight = function(n) {
    const nBits = n.toString(2);
    let count = 0;
    for (let i = 0; i < nBits.length; i++) {
        if(nBits[i] === "1"){
            count++
        }
    }
    return count;
};
console.log(hammingWeight("00000000000000000000000000001011"))