import React, { useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  let interval = null;

  const handleStartTimer = () => {
    interval = setInterval(() => {}, 1000);
  };

  const handleStopTimer = () => {
    setSeconds(0);
    return clearInterval(interval);
  };

  return (
    <div className="timer">
      {seconds}
      <div>
        <button onClick={handleStartTimer}>Start Timer</button>
        <button onClick={handleStopTimer}>Stop Timer</button>
      </div>
    </div>
  );
};

export default Timer;
