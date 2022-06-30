import React, { useContext, useRef, useState } from "react";
import "./Welcome.css";
import welcome from "../assets/welcome.jpg";
import { Link } from "react-router-dom";
import AuthContext from "../context/authContext";
import { endpoint, axios } from "../services/http";
import { getPdfSpeciallitys} from "./../components/pdf/orders";
export default function Dashboard() {
  const { auth, handleAuth, nameUser, nameRole } = useContext(AuthContext);

//PDF
const getPdf = async () => {
  const response = await axios.get(
    `${endpoint}/order-pdf/${nameUser}`,{responseType:"blob"}
  );
  const url = window.URL.createObjectURL(new Blob([response.data]));
  window.open(url, "_blank");
}


  return (
    <>
      <section className="services" id="services">
        {nameRole === 2 ? (
          <>
            <div className="box-container">
              <div className="box">
                <h3>Especialidad</h3>
                <p>Agregar especialidades disponibles</p>
                <Link className="btn" to="/bienvenido/especialidad/">
                  Ir<span> </span>
                </Link>
              </div>

              <div className="box">
                <h3>Medico</h3>
                <p>Agregar medico</p>
                <Link className="btn" to="/bienvenido/medico/">
                  Ir<span> </span>
                </Link>
              </div>

              <div className="box">
                <h3>Productos</h3>
                <p>Agregar productos</p>
                <Link className="btn" to="/bienvenido/productos/">
                  Ir<span> </span>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="box-container">
            <div className="box">
              <h3>Especialidades</h3>
              <p>ver especialidades disponibles</p>
              <Link className="btn" to="/bienvenido/especialidad/pdf">
                Ir<span> </span>
              </Link>
            </div>

            <div className="box">
              <h3>Productos</h3>
              <p>Compra producto</p>
              <Link className="btn" to="/bienvenido/Seleccionarproductos">
                Ir<span> </span>
              </Link>
            </div>
            <div className="box">
              <h3>Ver carrito</h3>
              <p>Ver los productos que estan en el carrito</p>
              <Link className="btn" to={`/bienvenido/Listaproductos/${nameUser}`}>
                <svg
                  style={{ color: "dark" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <span> </span>
              </Link>
            </div>

            <div className="box">
              <h3>Ver un reporte de los productos adquiridos</h3>
              <p>Reporte pdf de los productos</p>
              <a target="_blank" className="btn" onClick={getPdf} >
                <svg
                  style={{ color: "dark" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <span> </span>
              </a>
            </div>

          </div>
        )}
      </section>
    </>
  );
}
