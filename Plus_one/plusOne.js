const plusOne = (digits) => {
    return (BigInt(digits.join("")) + BigInt(1)).toString().split("")
}
console.log(plusOne([9]))