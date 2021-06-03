let timeoutRef;
const debounce = (fn, waitTime) => {
    if (timeoutRef)
        clearTimeout(timeoutRef);
    timeoutRef = setTimeout(fn, waitTime);
}

const myAction = () => {
    console.log("function called");
}
setInterval(debounce.bind(this, myAction, 1000), 250)



let timeoutRef2, maxWaitTimer;
const debounceWithMaxWait = (fn, waitTime, maxWait) => {

    if (timeoutRef2)
        clearTimeout(timeoutRef2);

    timeoutRef2 = setTimeout(() => {
        clearTimeout(maxWaitTimer); //clear max wait timer
        maxWaitTimer = null;
        fn();
    }, waitTime);

    if(maxWait && !maxWaitTimer){
        maxWaitTimer = setTimeout(() => {
            clearTimeout(timeoutRef2); //clear regular timer
            maxWaitTimer = null;
            fn();
        }, maxWaitTimer);
    }
}
