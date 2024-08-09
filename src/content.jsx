import { useState } from "react";

export default function Content() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = (value) => {
        // Ensure counter doesn't go below 0
        setCounter(prevCounter => {
            const newCounter = prevCounter + value;
            return newCounter >= 0 ? newCounter : 0;
        });
    };

    return (
        <div className="content col-12 text-center">
            <h1>Counter is: {counter}</h1>
            <div>
                <button onClick={() => incrementCounter(-5)}>-5</button>
                <button onClick={() => incrementCounter(-1)}>-1</button>
                <button onClick={() => incrementCounter(1)}>+1</button>
                <button onClick={() => incrementCounter(5)}>+5</button>
            </div>
        </div>
    );
}
