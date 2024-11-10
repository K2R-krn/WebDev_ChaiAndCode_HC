//^ Task 1: Creating a Counter Using Closures
// Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.
function createCounter() {
    let cnt = 0;
    return function(){
        cnt+=1;
        return cnt;
    }
}

//^ Task 2: Rate Limiter Function
// Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".
function rateLimiter(fn, limit) {
    let lastCalled = 0;
    return function(...args){
        const now= Date.now();
        if(now - lastCalled < limit){
            return 'Rate limit exceeded'
        }else{
            lastCalled = now;
            return fn(...args)
        }
    };
}

//^ Task 3: Memoization Function
// Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.
function memoize(fn) {
    const cache = {}; // {} is empty Object
// cache["key1"] = "result1"; // Adds a key-value pair to the cache
// console.log(cache); // Output: { key1: "result1" }

// cache["key2"] = "result2"; // Adds another key-value pair
// console.log(cache); // Output: { key1: "result1", key2: "result2" }
    return function(...args){     //the syntax ...args (known as the rest parameter) allows a function to accept an indefinite number of arguments as an array.In this context, ...args gathers all arguments passed to the function and places them in an array called args.
        const key = JSON.stringify(args);
        if(cache[key]){
            return cache[key];
        }
        else{
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}