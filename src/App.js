import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = [" Talha", " jaber", " Fahad"]
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Students name={names[0]} Id="001"></Students>
        <Students name={names[1]} Id="002"></Students>
        <Students name={names[2]} Id="003"></Students>
      </header>
    </div>
  );
}
function Students(props){
  return(
    <div style={{border:"5px solid cyan", margin: "10px", width:"400px", borderRadius:"10px"}}>
      <h3><strong>Name:</strong>{props.name}</h3>
      <p><strong>Id:</strong>{props.Id}</p>
    </div>
  )
}

export default App;
