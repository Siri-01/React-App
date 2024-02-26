import React from 'react';

function TimerControls({ isRunning, onStartStop, onReset }) {
  return (
    <div>
   

      <button style={{
        display:'flex',
        fontSize:'30px',
        cursor:'pointer',
        backgroundColor:'green',
        paddingLeft: '10px',
        paddingRight:'15px',
        marginLeft:'650px',
        marginRight:'250px',
        marginTop:'70px'
        
    }}
       onClick={onStartStop}>{isRunning ? 'Pause' : 'Start'}</button>
      
      <div>
      <button style={{
        display:'flex',
        fontSize:'30px',
        cursor:'pointer',
        backgroundColor:'blue',
        paddingLeft: '10px',
        paddingRight:'15px',
        marginRight:'300px',
        marginLeft:'780px',
        marginTop:'-40px'
        
        
    }}
      onClick={onReset}>Reset</button>
    </div>
    </div>
  );
}

export default TimerControls;
