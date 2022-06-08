import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import FullDetails from "./FullDetails.js"
//import { BrowserRouter, Route } from 'react-router-dom'


function App() {

 return (
   <BrowserRouter>
    <div>
      <NavBar/>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:id" element={<FullDetails />}/>
          </Routes>
      </div>
      </BrowserRouter>
  );
}


export default App;
