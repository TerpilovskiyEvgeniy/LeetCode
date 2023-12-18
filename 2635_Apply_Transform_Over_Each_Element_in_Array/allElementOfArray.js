var map = function(arr, fn) {
    for(let i =0; i<arr.length;i++){
        arr[i] = fn(arr[i],i);
    }
    return arr
};
console.log(map([1,2,3,4],function fn(n){
    return  n + 1
}))