import React from "react";
import "./Error404.css";
import { NavLink } from "react-router-dom";
function Error404() {
  return (
    <div className="body">
      <div className="container">
        <h2>Oops! Pagina no encontrada</h2>
        <h1>404</h1>
        <p>No se pudo encontrar la pagina.</p>
        <NavLink className="a" exact to="/">
           Ir  inicio
          </NavLink>
      </div>
    </div>
  );
}

export default Error404;
