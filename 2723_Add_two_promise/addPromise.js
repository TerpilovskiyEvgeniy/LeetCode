var addTwoPromises = async function(promise1, promise2) {
    let first = await promise1;
    let second = await promise2;
    return first + second;
};
console.log(addTwoPromises(20,200))
