import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import FullDetails from "./FullDetails.js"
import Contact from "./Contact.js"



function App() {

 return (
   <div>
   <BrowserRouter>
      <NavBar/>

          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:id" element={<FullDetails />}/>
          <Route path = "/Contact" element ={<Contact Us/>}/>
          </Routes>
      </BrowserRouter>
      </div>
  );
}


export default App;
