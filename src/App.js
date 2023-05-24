import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Componets/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Componets/About.js";
// import './App.css'
import { Button } from 'bootstrap';

import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import NewForm from "./Pages/NewForm.js"

function App(){
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Componets/Merchs" element={<Show />} />
          <Route path="/new" element={<NewForm />} />          
          {/* <Route path="/Componets/Merchs/:id" element={<ShowbyId/>} /> */}
          <Route path="/Componets/Merchs/:id/edit" element={<Edit />} />
          <Route path="src/Pages/FourOFour" element={<FourOFour />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;