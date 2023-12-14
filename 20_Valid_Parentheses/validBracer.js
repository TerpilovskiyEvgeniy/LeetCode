var isValid = function(s) {
    let match = {
        ")": "(",
        "]": "[",
        "}" :"{"
    };
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "[" || s[i] === "{" || s[i] === "("){
            stack.push(s[i])
        }   else if (match[s[i]] !== stack.pop()){
                return false;
        }
    }
    return stack.length === 0;
}
console.log(isValid("(){}[]"))