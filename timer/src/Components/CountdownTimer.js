// Inside CountdownTimer.js

import React, { useState, useEffect } from 'react';
import TimerControls from './TimerControls';
import TimerDisplay from './TimerDisplay';
function CountdownTimer() {
  const [time, setTime] = useState(300); // Initial time in seconds
  const [customTime, setCustomTime] = useState(300); // User-edited time
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(customTime);
  };

  const handleInputChange = (e) => {
    const inputTime = parseInt(e.target.value, 10) || 0;
    setCustomTime(inputTime);
    setTime(inputTime);
  };

  return (
    <div>
      <TimerDisplay time={time} />
      <input style={{
        width:'400px',
        height:'40px',
        fontSize:'20px',
        textAlign:'center'
      }}
        type="number"
        value={customTime}
        onChange={handleInputChange}
        min="0"
      />
      <TimerControls
        isRunning={isRunning}
        onStartStop={handleStartStop}
        onReset={handleReset}
      />
    </div>
  );
}

export default CountdownTimer;
