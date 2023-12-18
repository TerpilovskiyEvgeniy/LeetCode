const reverse = function(x) {
    let array = x.toString().split("").reverse().join("");
    let res = parseInt(array);
    if (res > 2147483648 || res < -2147483648){
        return 0
    }
    return x>0 ? res : -res;
};
console.log(reverse(-120))