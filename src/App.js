import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Componets/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Componets/About.js";



import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Show from "./Pages/Show";
import MerchNewForm from './Componets/MerchNewForm.js';

function App(){
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/Pages/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/merchs" element={<Show />} />
          {/* <Route path="/Componets/Merchs/:id" element={<ShowbyId/>} /> */}
          <Route path="/MerchNewForm" element={<MerchNewForm />} />
          <Route path="/FourOFour" element={<FourOFour />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;