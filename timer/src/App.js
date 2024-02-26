import React from 'react';
import CountdownTimer from './Components/CountdownTimer';


function App() {
  return (
    <div className="App">
      <div style={{
        fontStyle:'normal',
        textAlign:'center',
        fontSize:'40px',
        backgroundImage:'url("https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-orange-round-light-halo-background-image_593661.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        overflow:'hidden'
        }}>
        <h1>Count down Timer</h1>
        
      <CountdownTimer/>
      </div>
    </div>
  );
}

export default App;
