const printFun = () => console.log("function called");

const withOutThrottle = (fn) => {
    fn();
}
//setInterval(withOutThrottle.bind(this, printFun), 250)


let isRunning = false;
const withThrottle = (fn, time) => {
    if(isRunning) return;

    fn();
    isRunning = true;

    setTimeout(() => {isRunning = false}, time);
}
setInterval(withThrottle.bind(this, printFun, 1000), 250)