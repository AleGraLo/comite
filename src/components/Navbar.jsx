import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Link className="navbar-brand" to="/">
        Comite Bidafarma Málaga
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            < Link className="nav-link" to="/noticias">
              Noticias <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/documentacion">
              Documentación
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sobre-nosotros">
              Sobre nosotros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
