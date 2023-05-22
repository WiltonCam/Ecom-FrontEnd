import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Components/About";
import './App.css'


import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Show from "./Pages/Show";

function App(){
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="./Pages/Home" element={<Home />} />
          <Route path="./Componets/About" element={<About />} />
          <Route path="./Componets/Merchs/:id" element={<Show />} />
          <Route path="./Componets/Merchs/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;