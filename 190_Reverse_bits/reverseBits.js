const reverseBits = (n) => {
    const reverseNum = n.split("").reverse().join("");
    return parseInt(reverseNum,2);
}
console.log(reverseBits("00000010100101000001111010011100"))