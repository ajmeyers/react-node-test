// client/src/App.js

import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null); // our data var -> state initially set to null

  React.useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data.message)) // updating data variable with new JSON formatted data
      .catch(error => console.error(error));
    }, []);
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
             {!data ? "Loading..." : data}
          </p> 
      </header>
    </div>
  );
}

export default App;
