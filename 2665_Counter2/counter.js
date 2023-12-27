var createCounter = function (init) {
    let count = init;
   return{
       increment :() => ++count,
       decrement :() => --count,
       reset :() => init,
   }
};
console.log(createCounter(5))