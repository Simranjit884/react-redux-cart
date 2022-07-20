import classes from "./style.css";
import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [TimerIsPaused, setTimerIsPaused] = useState(true);

  useEffect(() => {
    let interval = null;
    if (!TimerIsPaused) {
        console.log('inside if');
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    } 
    else {
        console.log('inside else');
      clearInterval(interval);
    }

    return () => {
        clearInterval(interval);
    }
  }, [TimerIsPaused]);

  return (
    <div className="container">
      <span>{count}</span>
      <div>
        <button onClick={() => setTimerIsPaused(false)}>start</button>
        <button onClick={() => setTimerIsPaused(true)}>stop</button>
      </div>
    </div>
  );
};

export default Timer;
