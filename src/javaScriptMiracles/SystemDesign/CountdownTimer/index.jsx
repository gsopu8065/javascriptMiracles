function Countdown() {
    const [num, setNum] = React.useState(5);
    const [pause, setPause] = React.useState(false);

    let intervalRef = React.useRef();

    const decreaseNum = () => setNum((prev) => prev - 1);

    React.useEffect(() => {
        console.log("called", num)
        setPause(false);
        intervalRef.current = setInterval(decreaseNum, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    const handleClick = () => {
        if (!pause) {
            clearInterval(intervalRef.current);
        } else {
            intervalRef.current = setInterval(decreaseNum, 1000);
        }
        setPause((prev) => !prev);
    };

    return (
        <div>
            <div>{num}</div>
            <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button>
        </div>
    );
}


// Render
ReactDOM.render(<Countdown/>,
    document.getElementById('app')
);