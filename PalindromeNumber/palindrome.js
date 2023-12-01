var isPalindrome = (x) => {
 var res = x.toString().split("").reverse().join("")
    return x == res
}
console.log(isPalindrome(12))
