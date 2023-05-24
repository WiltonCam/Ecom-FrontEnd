import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'bootstrap';
const NavBar = () => {
  return (
    <div>
{/* <Button as="a" variant="primary">
    Button as link
  </Button> */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Spoils</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Componets/Merchs">Show</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new">Postings</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default NavBar;