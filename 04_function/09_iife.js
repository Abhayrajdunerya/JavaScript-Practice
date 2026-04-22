const runOnce = function () {
    console.log('This will never run again');
}

// This will never run again
runOnce();  

// This will never run again
(function () {
    console.log('This will never run again');
})();       

// This will ALSO never run again
(() => console.log('This will ALSO never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
// console.log(isPrivate);      // ReferenceError: isPrivate is not defined
console.log(notPrivate);        // 46


