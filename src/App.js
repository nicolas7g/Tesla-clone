import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import React from 'react'


function App() {

  return (
    
    <div className="App">
        {<Header />}
        <Home />
    </div>
  );
}

export default App;
