import React, { useEffect, useState } from 'react';
import './counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Counter: ${count}`;
    }, [count]);

    return (
        <div className="counter-container">
            <div className="counter-box">
                <h1 className="counter-title">Counter</h1>
                <p className="counter-text">Current Count: {count}</p>
                <button className="increment-btn" onClick={() => setCount(count + 1)}>
                    Increment
                </button>
            </div>
        </div>
    );
}

export default Counter;
