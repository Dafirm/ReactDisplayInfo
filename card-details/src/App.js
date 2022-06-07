import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

import './index.css'
//import { BrowserRouter, Route } from 'react-router-dom'


function App() {

 return (
    <div className = "App">
      <Navbar/>
        <h1 className="heading"> This is the information of clients!</h1>
          <div className = "content">
          <Home/>

      </div>
      </div>
  );
}


export default App;
