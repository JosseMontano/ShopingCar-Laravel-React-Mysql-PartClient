import "./App.css";

import Error404 from "./pages/Error404";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import FormHour from "./components/hour/FormHour";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import ShowSpeciallity from "./components/Speciallity/FormSpeciallity";
import ShowMedico from "./components/Medico/ShowMedico";
import { useState, useEffect, useContext, useRef } from "react";

import ThemeContext from "./context/ThemeContext";
import AuthContext from "./context/authContext";

import ShowProducts from "./components/products/formProducts/showProducts";
import EditProducts from "./components/products/formProducts/editProducts";
import CreateProducts from "./components/products/formProducts/createProduct";

import ShowProductsCustomer from "./components/products/CarProducts/showProducts";
import AddCarProduct from "./components/products/CarProducts/addCarProduct";

import LisProductsCar from "./components/products/CarProducts/lisProductsCar";

import Pay from "./components/pay/pay";
import Speciallitypdf from "./components/pdf/speciallity";

import Doctorpdf from "./components/pdf/doctors";
import Me from "./pages/me";
import EditUser from "./pages/editUser";
export default function App() {
  return (
    <>
      <Nav />
    </>
  );
}

// =========================== URL'S ===========================

function Url() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="registrar" element={<Register />} />
        <Route exact path="perfil/:name_user" element={<Me />} />
        <Route exact path="Editar-Perfil/:name_user" element={<EditUser />} />
        <Route exact path="bienvenido" element={<Welcome />} />
        /* Speciallity */
        <Route
          exact
          path="/bienvenido/especialidad"
          element={<ShowSpeciallity />}
        />
        <Route
          exact
          path="/bienvenido/especialidad/pdf"
          element={<Speciallitypdf />}
        />
        /* Medico */
        <Route exact path="/bienvenido/medico" element={<ShowMedico />} />
        <Route exact path="/bienvenido/medico-pdf" element={<Doctorpdf />} />
        /* Horas */
        <Route exact path="/bienvenido/horas" element={<FormHour />} />
        /* Producto */
        <Route exact path="/bienvenido/productos" element={<ShowProducts />} />
        <Route
          exact
          path="/bienvenido/productos/add"
          element={<CreateProducts />}
        />
        <Route
          exact
          path="/bienvenido/productos/edit/:id"
          element={<EditProducts />}
        />
        <Route
          exact
          path="/bienvenido/Seleccionarproductos"
          element={<ShowProductsCustomer />}
        />
        <Route
          exact
          path="/bienvenido/Seleccionarproductos/add/:id_product/:amount"
          element={<AddCarProduct />}
        />
        <Route
          exact
          path="/bienvenido/Listaproductos/:nameuser"
          element={<LisProductsCar />}
        />
        <Route
          exact
          path="/bienvenido/pagar/:total"
          element={<Pay />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

// =========================== NAVEGACION GLOBAL ===========================
function Nav() {
  const navigate = useNavigate();
  var refNavbar = useRef();
  var refMenu = useRef();
  //var name_user = JSON.parse(localStorage.getItem("name_user"));

  const logout = (e) => {
    handleAuth(e, "");
    navigate("/login");
  };

  const { theme, handleTheme } = useContext(ThemeContext);
  const { auth, handleAuth, nameUser, nameRole } = useContext(AuthContext);

  const InicieSesion = {};

  const hanleToggleMenu = (e) =>{
    refNavbar.current.classList.toggle('active');
  };

  return (
    <>
      <div className="App">
        <header className="header"
         style={{ position: "relative", visibility: "hidden" }}
        >
          <a href="#" className="logo">
            <i className="fas fa-heartbeat"></i>  <Link to={`/perfil/${nameUser}`}>{nameUser}</Link>
          </a>
          {nameUser ? (
            <>
              <nav className="navbar" ref={refNavbar}>
                <Link to="/">Inicio</Link>
                <Link to="/bienvenido">Bienvenido</Link>
                <a onClick={logout}>Cerrar sesion</a>
              </nav>
              <div id="menu-btn" onClick={hanleToggleMenu} ref={refMenu}>☰</div>
            </>
          ) : (
            <Link to="/login">inicie sesion</Link>
          )}
        </header>

        {/* Aux nav*/}

        <header
          className="header"

        >
          <a href="#" className="logo">
            <i className="fas fa-heartbeat"></i> <Link to={`/perfil/${nameUser}`}>{nameUser}</Link>
          </a>
          {nameUser ? (
            <>
              <nav className="navbar" ref={refNavbar}>
              <Link to="/">Inicio</Link>
                <Link to="/bienvenido">Bienvenido</Link>
                <a onClick={logout}>Cerrar sesion</a>
              </nav>
              <div id="menu-btn" onClick={hanleToggleMenu} ref={refMenu}>☰</div>
            </>
          ) : (
            <Link to="/login" style={{ textAlign: "center" }}>
              inicie sesion
            </Link>
          )}
        </header>

        <Url />
      </div>
    </>
  );
}

