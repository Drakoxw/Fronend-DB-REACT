import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <img className="imagen" width="200" heigth="70" alt="imagen-sust"
      src="https://granfondocartagena.com/wp-content/uploads/2020/08/entre-5-logo-slider.png"/>
        <p className="demo"><h2>Versión Demo</h2></p>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <ul>
            <li>
              <Link to="/">Registro</Link>
            </li>
            <li>
              <Link to="/clientes">Clientes</Link>
            </li>
            <li>
              <Link to="/reservas">Reservas</Link>
            </li>
            <li>
              <Link to="/depuracion">Depuración</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

