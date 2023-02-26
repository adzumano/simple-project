import React, {useState} from 'react';
import styles from './Counter.module.scss'
const Counter = () => {
    const [count, setCount] = useState(0)

    const incremet = () => setCount(prev => prev + 1);
    return (
        <button onClick={incremet} className={styles.counter__green}>{count}</button>
    );
};

export default Counter;