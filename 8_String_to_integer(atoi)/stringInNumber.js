const myAtoi = function (s) {
    let result = parseInt(s);
    if (isNaN(result)) {
        return 0;
    }
    if (result >= 2147483648) {
        return 2147483647
    } else if (result < -2147483648) {
        return -2147483648
    } else return result;
};
console.log(myAtoi("-42"))