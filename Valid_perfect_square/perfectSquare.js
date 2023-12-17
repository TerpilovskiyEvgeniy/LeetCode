const isPerfectSquare = (num) => {
    num = num ** 0.5
    return num % 1  === 0
}
console.log(isPerfectSquare(14))