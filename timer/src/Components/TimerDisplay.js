import React from 'react';

function TimerDisplay({ time }) {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>

      <h1  style={{ fontSize: '70px'}}>{formatTime(time)}</h1>
    </div>
  );
}

export default TimerDisplay;
